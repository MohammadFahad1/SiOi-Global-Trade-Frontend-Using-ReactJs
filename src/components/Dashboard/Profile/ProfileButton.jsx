import React from "react";

const ProfileButton = ({ isEditing, setIsEditing }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      {isEditing ? (
        <div className="space-x-2">
          <button type="submit" className="btn btn-primary btn-sm">
            Save Changes
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(true);
          }}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default ProfileButton;
