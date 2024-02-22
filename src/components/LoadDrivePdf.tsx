const LoadPdf = (props: {
  link: string;
  title?: string;
  width: string;
  height: string;
}) => {
  const id = props?.link?.split("/");
  //   console.log(id);

  return (
    <iframe
      src={`https://drive.google.com/file/d/${id[5]}/preview`}
      width={props.width}
      height={props.height}
      allow="autoplay"
    ></iframe>
  );
};

export default LoadPdf;
