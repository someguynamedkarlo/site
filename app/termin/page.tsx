import { getAvailableTimes } from "../getAvailableTimes";
export default async function Page() {
  console.log(getAvailableTimes("2025-09-05"));
  return <></>;
}
