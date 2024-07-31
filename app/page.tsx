import FilterForm from "./components/filter-form";
import JobListPage from "./jobs/page";

export default function Home() {
  return (
    <div className="">
      <FilterForm />
      <JobListPage />
    </div>
  );
}
