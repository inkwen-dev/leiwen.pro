import { redirect } from "next/navigation";

/** 不维护旧链兼容：未找到的路径一律回首页 */
export default function NotFound() {
  redirect("/");
}
