import {AdminTeamControllerApi, Configuration, PublicControllerApi,} from "../api-client";
import {axios, basePath} from "./axios";

const configuration = new Configuration({basePath});

const adminTeamControllerApi = new AdminTeamControllerApi(
  configuration,
  basePath,
  axios
);

const publicControllerApi = new PublicControllerApi(
  configuration,
  basePath,
  axios
);

export {
  publicControllerApi,
  adminTeamControllerApi
};
