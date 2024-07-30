import FilterForm from "./components/filter-form";
import JobList from "./jobs/job-list";

export default function Home() {
  return (
    <div className="">
      <FilterForm />
      <JobList />
    </div>
  );
}
