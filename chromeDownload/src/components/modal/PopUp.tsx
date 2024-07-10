import { IPropertiesCard } from "../HomePage";
import FormCreate from "../form/FormCreate";

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

const PopUp: React.FC<Props> = ({
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
}) => {
  return (
    <div>
      <FormCreate
        showPopup={showPopup}
        onClickClosePop={onClickClosePop}
        onSubmit={onSubmit}
        filename={filename}
        creator={creator}
        image={image}
        buttonIcon={buttonIcon}
        handleFilenameChange={handleFilenameChange}
        handleCreatorChange={handleCreatorChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
};

export default PopUp;
