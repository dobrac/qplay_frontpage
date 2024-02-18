import {AdminTeamGroupDTO, MediaGroupDTO} from "../api-client";
import {adminTeamControllerApi} from "./api-client";
import {APIDataResponse, APIResponse, ErrorAPIResponse} from "./response";
import {useQuery} from "@tanstack/react-query";

export async function findAdminTeam(): Promise<
  APIResponse<AdminTeamGroupDTO[]>
> {
  try {
    const result = await adminTeamControllerApi.getAdminTeam();
    if (result.data) {
      return new APIResponse<AdminTeamGroupDTO[]>(result.data);
    }
  } catch (e) {
    return new APIResponse<AdminTeamGroupDTO[]>(undefined);
  }

  return ErrorAPIResponse;
}

export function useAdminTeam(placeholderData?: AdminTeamGroupDTO[]): APIDataResponse<AdminTeamGroupDTO[]> {
  const data = useQuery({
    queryKey: ["public", "adminteam"],
    queryFn: () => findAdminTeam(),
    placeholderData: new APIResponse(placeholderData)
  });
  return new APIDataResponse(data);
}

export async function findMedia(placeholderData?: APIResponse<MediaGroupDTO[]>): Promise<
  APIResponse<MediaGroupDTO[]>
> {
  try {
    const result = await adminTeamControllerApi.getMedia();
    if (result.data) {
      return new APIResponse<MediaGroupDTO[]>(result.data);
    }
  } catch (e) {
    return new APIResponse<MediaGroupDTO[]>(undefined);
  }

  return ErrorAPIResponse;
}

export function useMedia(placeholderData?: MediaGroupDTO[]): APIDataResponse<MediaGroupDTO[]> {
  const data = useQuery({
    queryKey: ["public", "adminteam", "media"],
    queryFn: () => findMedia(),
    placeholderData: new APIResponse(placeholderData)
  });
  return new APIDataResponse(data);
}
