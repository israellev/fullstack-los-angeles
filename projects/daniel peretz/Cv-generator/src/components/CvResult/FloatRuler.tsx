import { Box, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useGlobalCv } from "../../global-hooks/useGlobalCv";

interface Props {
  cvRef: React.MutableRefObject<HTMLElement | undefined>
}

export function FloatRuler(props: Props) {
  const {cvData} = useGlobalCv()

  async function generatePDF() {
    const element = props.cvRef.current! as HTMLElement
    const canvas = await html2canvas(element, {
      useCORS: true,
    })
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF('p', 'mm', 'a4');
    const a4WidthInMM = 210;  // Width of A4 in mm
    const a4HeightInMM = 297;  // Height of A4 in mm
    // Calculate the scale factor for width and height
    const widthScaleFactor = a4WidthInMM / canvas.width;
    const heightScaleFactor = a4HeightInMM / canvas.height;
    // Use the smaller scale factor to ensure entire content fits
    const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);
    const scaledWidth = canvas.width * scaleFactor;
    const scaledHeight = canvas.height * scaleFactor;
    pdf.addImage(imgData, "PNG", 0, 0, scaledWidth, scaledHeight);
    pdf.save(`CV ${cvData.name}.pdf`);
  }

  return (
    <Box
      sx={{
        borderRadius: "5px",
        float: "right",
      }}
    >
      <IconButton onClick={generatePDF} id="saveAsPdf">
        <SaveIcon
          sx={{
            color: "rgba(0, 0, 0, 0.54) !important",
          }}
        />
      </IconButton>
    </Box>
  );
}
