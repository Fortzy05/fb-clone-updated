import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Sonny Sangha",
    src: "https://links.papareact.com/zef",
    profile: "https://links.papareact.com/l4w",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zx",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "http://links.papareact.com/k2j",
    profile: "http://links.papareact.com/f8p",
  },
  {
    name: "Bill Gates",
    src: "http://links.papareact.com/4y4",
    profile: "http://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => {
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />;
      })}
    </div>
  );
}

export default Stories;
