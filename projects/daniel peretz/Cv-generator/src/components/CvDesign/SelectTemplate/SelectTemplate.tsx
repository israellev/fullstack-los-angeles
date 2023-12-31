import { Box, Typography } from "@mui/material";
import { Template1 } from "./cvTemplates/Template1";
import { Template2 } from "./cvTemplates/Template2";
import { Template3 } from "./cvTemplates/Template3";
import image1 from "./images/preview.a5fc2f27.png"
import image2 from "./images/preview.f1f46a82.png"
import image3 from "./images/preview.27f7a093.png"
import image4 from "./images/preview.f1f46a82.png"

export const templateList = [
  {
    name: "Onyx",
    component: Template1,
    imageUrl: image1,
  },
  {
    name: "Pikachu",
    component: Template2,
    imageUrl: image2,
  },
  {
    name: "Gengar",
    component: Template3,
    imageUrl: image3,
  },
  {
    name: "Gengar",
    component: Template1,
    imageUrl: image4,
  },
];

interface Props {
  templateIndex: number;
  setTemplateIndex: (templateIndex: number) => void;
}

export function SelectTemplate(props: Props) {
  const { templateIndex, setTemplateIndex } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {templateList.map((template, index) => {
        return (
          <Box
            key={index}
            onClick={() => setTemplateIndex(index)}
            sx={{
              paddingX: 2,
              paddingY: 1,
              width: "50%",
              img: {
                borderRadius: "4px",
                border:
                  index === templateIndex
                    ? "1px solid rgb(39 12 12 / 35%)"
                    : "none",
              },
              "img:hover": {
                cursor: "pointer",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,.4), 0 2px 4px -1px rgba(0,0,0,.06)",
              },
            }}
          >
            <img
              src={template.imageUrl}
              alt="Template Preview"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Typography variant="subtitle2" textAlign="center">
              {template.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
