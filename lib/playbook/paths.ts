/** 栏目内链接前缀。不读文件，客户端也能用。 */
export function playbookPath(path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/playbook/${clean}` : "/playbook";
}
