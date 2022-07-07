import Pdf from "../../../assets/docs-icons/pdf.png";
import Word from "../../../assets/docs-icons/word.png";
import Text from "../../../assets/docs-icons/text-format.png";
import Picture from "../../../assets/docs-icons/picture.png";
import Excel from "../../../assets/docs-icons/xls.png";

const docIcons = {
  pdf: Pdf,
  docx: Word,
  plain: Text,
  png: Picture,
  jpg: Picture,
  jpeg: Picture,
  avif: Picture,
  "vnd.openxmlformats-officedocument.spreadsheetml.sheet": Excel,
  xls: Excel,
  xlsx: Excel
};

export default docIcons;
