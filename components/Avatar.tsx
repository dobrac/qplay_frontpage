import {UserTuple} from "../api-client";
import {AvatarType, getAvatarUrl} from "../utils/avatar";
import * as React from "react";

export default function Avatar({
                                 author,
                                 className,
                                 type = AvatarType.BUST,
                                 circle = false,
                                 rounded = false,
                                 width = 64,
                                 hideOnMobile = false,
                               }: {
  author: UserTuple;
  type?: AvatarType;
  circle?: boolean;
  rounded?: boolean;
  className?: string;
  width?: number;
  hideOnMobile?: boolean;
}) {
  return (
    <div
      className={[
        "flex-column align-items-center",
        className,
        hideOnMobile ? "d-none d-md-flex" : "d-flex",
      ].join(" ")}
    >
      <img
        src={getAvatarUrl(author.minecraftUUID, width, type)}
        alt="profile picture"
        style={{
          maxWidth: width + "px",
          height: width + "px",
        }}
        className={[
          circle ? "rounded-circle" : "",
          rounded ? "rounded" : "",
        ].join(" ")}
      />
    </div>
  );
}
