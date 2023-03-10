import Stories from "./Stories";


function Feed() {
  return (
    <div className="col-span-5 flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl" >
        <Stories />
        <InputBox />
        {/* post */}
      </div>
    </div>
  );
}

export default Feed;
