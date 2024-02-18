const ExternalLink = (item: { title: string; link: string; idx: number }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg mb-2 font-medium lg:ml-[5rem] self-start first-letter:text-2xl no-underline text-[#177394] hover:text-yellow-600"
    >
      {item.idx + 1}. {item.title}
    </a>
  );
};

export default ExternalLink;
