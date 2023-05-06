import { IModalData } from "../types";

export const initialModalData: IModalData = {
  addMember: {
    active: false,
    teamId: -1,
    member: {
      name: "",
      role: "",
    },
  },
  editMember: {
    active: false,
    teamId: -1,
    memberIndex: -1,
    member: {
      name: "",
      role: "",
    },
  },
  deleteTeam: {
    active: false,
    teamId: -1,
  },
};

export const modalOpenAttributes = {
  addMember: "data-open-addmember",
  editMember: "data-open-editmember",
  deleteTeam: "data-open-deleteteam",
};
