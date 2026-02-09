import React from "react";

const ProfileForm = ({ register, errors, isEditing }) => {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label text-gray-800 font-semibold">First Name</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 w-full"
          disabled={!isEditing}
          {...register("first_name", { required: "First name is required" })}
        />
        {errors.first_name && (
          <p className="text-red-500">{errors.first_name.message}</p>
        )}
      </div>

      <div className="form-control">
        <label className="label text-gray-800 font-semibold">Last Name</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 w-full"
          disabled={!isEditing}
          {...register("last_name")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800 font-semibold">
          Email Address
        </label>
        <input
          type="email"
          className="input input-bordered bg-gray-100 w-full"
          disabled
          {...register("email")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800 font-semibold">Address</label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 w-full"
          disabled={!isEditing}
          {...register("address")}
        />
      </div>

      <div className="form-control">
        <label className="label text-gray-800 font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          className="input input-bordered bg-gray-100 w-full"
          disabled={!isEditing}
          {...register("phone_number")}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
