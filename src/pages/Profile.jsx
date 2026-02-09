import React, { useEffect, useState } from "react";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useForm } from "react-hook-form";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateUserProfile, changePassword } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => {
      setValue(key, user[key]);
    });
  }, [user, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };

      const res = await updateUserProfile(profilePayload);
      if (data.current_password && data.new_password) {
        const passwordPayload = {
          current_password: data.current_password,
          new_password: data.new_password,
        };
        const res = await changePassword(passwordPayload, true);
        if (res.success) {
          setSuccessMsg("Profile and password updated successfully");
          setErrorMsg("");
        } else {
          setErrorMsg("Profile and password update failed");
        }
      } else {
        if (res.success) {
          setSuccessMsg("Profile updated successfully");
          setErrorMsg("");
        } else {
          setErrorMsg("Profile update failed");
        }
      }

      setIsEditing(false);
    } catch (err) {
      setErrorMsg("Profile update failed");
      console.error("Profile update failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card w-full max-w-2xl mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4 font-bold">
          Profile Information
        </h2>
        {successMsg && (
          <p className="text-green-600 text-center text-sm font-medium p-2 rounded bg-green-50 border border-green-200">
            {successMsg}
          </p>
        )}
        {errorMsg && (
          <p className="text-red-600 text-center text-sm font-medium p-2 rounded bg-red-50 border border-red-200">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          {loading ? (
            <>
              <h5 className="block mx-auto text-center text-xl font-semibold">
                Saving...
              </h5>
              <span className="loading loading-dots loading-xl bg-blue-600 block mx-auto"></span>
            </>
          ) : (
            <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
