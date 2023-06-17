export enum AvatarType {
  HEAD,
  BUST,
}

export function getAvatarUrl(
  minecraftUUID: string | null | undefined,
  size = 64,
  type = AvatarType.BUST
) {
  if (type === AvatarType.BUST) {
    return getAvatarUrlSurgePlay(minecraftUUID, size, type);
  }
  return getAvatarUrlCrafatar(minecraftUUID, size, type);
}

function getAvatarUrlSurgePlay(
  minecraftUUID: string | null | undefined,
  size = 64,
  type = AvatarType.BUST
) {
  let typeString;
  switch (type) {
    case AvatarType.HEAD:
      typeString = "face";
      break;
    case AvatarType.BUST:
      typeString = "bust";
      break;
  }

  return (
    "https://visage.surgeplay.com/" +
    typeString +
    "/" +
    size +
    "/" +
    (minecraftUUID?.replaceAll("-", "") ?? "X-Steve")
  );
}

function getAvatarUrlCrafatar(
  minecraftUUID: string | null | undefined,
  size = 64,
  type = AvatarType.BUST
) {
  let typeString;
  switch (type) {
    case AvatarType.HEAD:
      typeString = "avatars";
      break;
    case AvatarType.BUST:
      typeString = "renders/body";
      break;
  }

  return (
    "https://crafatar.com/" +
    typeString +
    "/" +
    (minecraftUUID ?? "bbcf1cbf-2233-4821-80aa-ecd8d0cd34be").replaceAll(
      "-",
      ""
    ) +
    "?size=" +
    size +
    "&overlay" +
    "&default=MHF_Steve"
  );
}
