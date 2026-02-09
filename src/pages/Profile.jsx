import React, { useState } from "react";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useForm } from "react-hook-form";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <div className="card w-full max-w-2xl mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4 font-bold">
          Profile Information
        </h2>
        <form>
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

          <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
