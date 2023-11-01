import ModuleList from "./ModuleList";
function Modules({ courses}) {
  return (
    <div className="p-4 d-flex flex-grow-1">
      
      <ModuleList courses={courses} />
     
    </div>
  );
}
export default Modules;
