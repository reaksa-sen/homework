import { ChangeEvent, useEffect, useState } from "react";
import { IPropertiesCard } from "../HomePage";
import { MdClear } from "react-icons/md";

interface Props {
  filename: string;
  creator: string;
  image?: string;
  showPopup: boolean;
  buttonIcon: boolean;
  handleFilenameChange: (value: string) => void;
  handleCreatorChange: (value: string) => void;
  handleImageChange: (value: string) => void;
  onClickClosePop: (isPopup: boolean) => void;
  onSubmit: (formData: IPropertiesCard) => void;
}
let nextId: number = 1;

function FormCreate({
  showPopup,
  onClickClosePop,
  onSubmit,
  filename,
  creator,
  image,
  buttonIcon,
  handleFilenameChange,
  handleCreatorChange,
  handleImageChange,
}: Props) {
  const [shouldRender, setShouldRender] = useState(showPopup);

  useEffect(() => {
    if (showPopup) {
      setShouldRender(true);
    } else {
      // Delay unmounting the component to allow the fade-out transition to complete
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 200); // Adjust the timeout duration as needed to match your transition duration
      return () => clearTimeout(timeoutId);
    }
  }, [showPopup]);

  const onCancel = () => {
    handleFilenameChange("");
    handleCreatorChange("");
    handleImageChange("");
    onClickClosePop(false);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          handleImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (creator.length < 3) {
      alert("Creator must be at least 3 characters long");
      return;
    }
    const newFormData: IPropertiesCard = {
      id: nextId++,
      filename,
      creator,
      image,
    };
    onSubmit(newFormData);
    onCancel();
  };
  const handleRemoveImg = () => {
    handleImageChange("");
  };

  return shouldRender ? (
    <div
      className={`w-full h-[100vh] absolute top-0 bg-bgPopUp flex justify-center items-center ${
        showPopup ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div className=" flex flex-col gap-7 bg-slate-500 px-10 py-10 rounded-xl shadow-2xl">
        <div className=" text-2xl font-bold text-center">
          {buttonIcon ? "Update Card" : "Create Card "}
        </div>
        <div>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              <label htmlFor="filename" className=" font-semibold mr-5">
                Filename:
              </label>
              <input
                type="text"
                id="filename"
                value={filename}
                onChange={(e) => handleFilenameChange(e.target.value)}
                required
                className=" w-72 px-2 py-2 rounded-lg bg-slate-200 outline-orange-700"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="creator" className=" font-semibold mr-5">
                Creator:
              </label>
              <input
                type="text"
                id="creator"
                value={creator}
                onChange={(e) => handleCreatorChange(e.target.value)}
                required
                className=" w-72 px-2 py-2 rounded-lg bg-slate-200 outline-orange-700"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="image" className=" font-semibold mr-5">
                Image:
              </label>
              <input
                type="file"
                onChange={handleImage}
                id="image"
                className=" w-72 px-2 py-2 rounded-lg bg-slate-200 outline-orange-700"
              />
              <div className=" relative">
                {image && (
                  <>
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-32 h-20 mt-9 ml-8 object-cover"
                    />
                    <div className=" absolute top-2 left-36">
                      <MdClear
                        size={20}
                        onClick={handleRemoveImg}
                        className=" hover:bg-slate-300 bg-slate-800 rounded-full text-white hover:text-black"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className=" flex justify-end">
              <button
                onClick={onCancel}
                className="block bg-rose-500 px-6 py-2 rounded-xl text-white font-semibold mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="block bg-blue-700 px-6 py-2 rounded-xl text-white font-semibold"
              >
                {buttonIcon ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}

export default FormCreate;
