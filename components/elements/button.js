export default function Button({
  link,
  text,
  type = "default",
  newTab = false,
}) {
  let buttonColor;
  let textColor;
  if (type == "primary") {
    buttonColor = "before:bg-primary";
    textColor = "text-white";
  } else {
    buttonColor = "before:bg-gray-500";
    textColor = "text-white";
  }

  return (
    <>
      {newTab ? (
        <a
          href={link}
          target="_blank"
          className={`relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                              before:inset-0 before:rounded-full ${buttonColor} before:transition before:duration-300 
                              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`}
        >
          <span className={`relative text-sm font-semibold ${textColor}`}>
            {text}
          </span>
        </a>
      ) : (
        <a
          href={link}
          className={`relative flex h-9 w-full items-center justify-center px-8 before:absolute 
                              before:inset-0 before:rounded-full ${buttonColor} before:transition before:duration-300 
                              hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`}
        >
          <span className={`relative text-sm font-semibold ${textColor}`}>
            {text}
          </span>
        </a>
      )}
    </>
  );
}
