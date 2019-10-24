import { Routes } from "@angular/router";

import { EmployeeList } from "./EmployeeList.component";
import { EmployeeDetails } from "./EmployeeDetails.Component";
import { EmployeeEdit } from "./EmployeeEdit.Component";

export const EmployeeRoutes: Routes = [
  {
    path: "EmployeeList",
    component: EmployeeList
  },
  {
    path: "EmployeeDetails/:id",
    component: EmployeeDetails
  },
  { path: "EmployeeEdit/:id", component: EmployeeEdit }
];
