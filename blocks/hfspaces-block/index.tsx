import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { tw } from "twind"

import { load } from "js-yaml";
import { useMemo } from "react";

import "https://gradio.s3-us-west-2.amazonaws.com/3.19.1/gradio.js"

export default function HFSpacesBlock(props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const data = useMemo(() => parseContent(context.path, content), [content]);

  return (
    <Box p={4}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        borderRadius={6}
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          <div className={tw(`flex items-center space-x-1`)}>
            <svg
              height="1.5em"
              width="1.5em"
              viewBox="0 0 95 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.2119 76.5C66.4037 76.5 81.9619 60.9419 81.9619 41.75C81.9619 22.5581 66.4037 7 47.2119 7C28.02 7 12.4619 22.5581 12.4619 41.75C12.4619 60.9419 28.02 76.5 47.2119 76.5Z"
                fill="#FFD21E"
              />
              <path
                d="M81.9619 41.75C81.9619 22.5581 66.4037 7 47.2119 7C28.02 7 12.4619 22.5581 12.4619 41.75C12.4619 60.9419 28.02 76.5 47.2119 76.5C66.4037 76.5 81.9619 60.9419 81.9619 41.75ZM8.46185 41.75C8.46185 20.349 25.8108 3 47.2119 3C68.6129 3 85.9619 20.349 85.9619 41.75C85.9619 63.151 68.6129 80.5 47.2119 80.5C25.8108 80.5 8.46185 63.151 8.46185 41.75Z"
                fill="#FF9D0B"
              />
              <path
                d="M58.5024 32.2915C59.7768 32.7415 60.2839 35.3615 61.5713 34.6769C64.0095 33.3805 64.9351 30.353 63.6387 27.9148C62.3423 25.4767 59.3148 24.5511 56.8766 25.8475C54.4384 27.1439 53.5128 30.1714 54.8092 32.6096C55.4211 33.7604 57.3632 31.8892 58.5024 32.2915Z"
                fill="#3A3B45"
              />
              <path
                d="M34.9454 32.2915C33.671 32.7415 33.164 35.3615 31.8766 34.6769C29.4384 33.3805 28.5128 30.353 29.8092 27.9148C31.1056 25.4767 34.1331 24.5511 36.5713 25.8475C39.0095 27.1439 39.9351 30.1714 38.6387 32.6096C38.0268 33.7604 36.0846 31.8892 34.9454 32.2915Z"
                fill="#3A3B45"
              />
              <path
                d="M46.9619 56.289C56.7903 56.289 59.9619 47.5261 59.9619 43.0262C59.9619 40.6875 58.3898 41.4236 55.8718 42.6702C53.5449 43.8222 50.4102 45.4101 46.9619 45.4101C39.7822 45.4101 33.9619 38.5263 33.9619 43.0262C33.9619 47.5261 37.1334 56.289 46.9619 56.289Z"
                fill="#3A3B45"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="33"
                y="41"
                width="27"
                height="16"
              >
                <path
                  d="M46.9619 56.289C56.7903 56.289 59.9619 47.5261 59.9619 43.0262C59.9619 40.6875 58.3898 41.4236 55.8718 42.6702C53.5449 43.8222 50.4102 45.4101 46.9619 45.4101C39.7822 45.4101 33.9619 38.5263 33.9619 43.0262C33.9619 47.5261 37.1334 56.289 46.9619 56.289Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M47.2119 66.5C52.0018 66.5 55.8848 62.617 55.8848 57.8271C55.8848 54.0962 53.5291 50.9156 50.224 49.6915C50.1023 49.6464 49.9794 49.604 49.8553 49.5643C49.0219 49.2979 48.1337 52.1623 47.2119 52.1623C46.3506 52.1623 45.5186 49.2797 44.7332 49.5135C41.151 50.5799 38.5389 53.8984 38.5389 57.8271C38.5389 62.617 42.4219 66.5 47.2119 66.5Z"
                  fill="#F94040"
                />
              </g>
              <path
                d="M70.7119 37C72.5068 37 73.9619 35.5449 73.9619 33.75C73.9619 31.9551 72.5068 30.5 70.7119 30.5C68.9169 30.5 67.4619 31.9551 67.4619 33.75C67.4619 35.5449 68.9169 37 70.7119 37Z"
                fill="#FF9D0B"
              />
              <path
                d="M24.2119 37C26.0068 37 27.4619 35.5449 27.4619 33.75C27.4619 31.9551 26.0068 30.5 24.2119 30.5C22.4169 30.5 20.9619 31.9551 20.9619 33.75C20.9619 35.5449 22.4169 37 24.2119 37Z"
                fill="#FF9D0B"
              />
              <path
                d="M17.5238 48C15.9048 48 14.4578 48.665 13.4488 49.871C12.8248 50.618 12.1728 51.822 12.1198 53.625C11.4408 53.43 10.7878 53.321 10.1778 53.321C8.6278 53.321 7.2278 53.915 6.2378 54.994C4.9658 56.379 4.4008 58.081 4.6468 59.784C4.7638 60.595 5.0348 61.322 5.4398 61.995C4.5858 62.686 3.9568 63.648 3.6528 64.805C3.4148 65.712 3.1708 67.601 4.4448 69.547C4.3638 69.674 4.2878 69.806 4.2168 69.941C3.4508 71.395 3.4018 73.038 4.0778 74.568C5.1028 76.887 7.6498 78.714 12.5958 80.675C15.6728 81.895 18.4878 82.675 18.5128 82.682C22.5808 83.737 26.2598 84.273 29.4448 84.273C35.2988 84.273 39.4898 82.48 41.9018 78.944C45.7838 73.25 45.2288 68.042 40.2058 63.022C37.4258 60.244 35.5778 56.148 35.1928 55.249C34.4168 52.587 32.3648 49.628 28.9538 49.628H28.9528C28.6658 49.628 28.3758 49.651 28.0898 49.696C26.5958 49.931 25.2898 50.791 24.3568 52.085C23.3498 50.833 22.3718 49.837 21.4868 49.275C20.1528 48.429 18.8198 48 17.5238 48ZM17.5238 52C18.0338 52 18.6568 52.217 19.3438 52.653C21.4768 54.006 25.5928 61.081 27.0998 63.833C27.6048 64.755 28.4678 65.145 29.2448 65.145C30.7868 65.145 31.9908 63.612 29.3858 61.664C25.4688 58.733 26.8428 53.942 28.7128 53.647C28.7948 53.634 28.8758 53.628 28.9538 53.628C30.6538 53.628 31.4038 56.558 31.4038 56.558C31.4038 56.558 33.6018 62.078 37.3778 65.851C41.1538 69.625 41.3488 72.654 38.5968 76.69C36.7198 79.442 33.1268 80.273 29.4448 80.273C25.6258 80.273 21.7108 79.379 19.5168 78.81C19.4088 78.782 6.0658 75.013 7.7558 71.805C8.0398 71.266 8.5078 71.05 9.0968 71.05C11.4768 71.05 15.8058 74.592 17.6668 74.592C18.0828 74.592 18.3758 74.415 18.4958 73.983C19.2888 71.138 6.4388 69.942 7.5218 65.821C7.7128 65.092 8.2308 64.796 8.9588 64.797C12.1038 64.797 19.1598 70.328 20.6388 70.328C20.7518 70.328 20.8328 70.295 20.8768 70.225C21.6178 69.029 21.2118 68.194 15.9888 65.033C10.7658 61.871 7.0998 59.969 9.1848 57.699C9.4248 57.437 9.7648 57.321 10.1778 57.321C13.3488 57.322 20.8408 64.14 20.8408 64.14C20.8408 64.14 22.8628 66.243 24.0858 66.243C24.3668 66.243 24.6058 66.132 24.7678 65.858C25.6348 64.396 16.7148 57.636 16.2118 54.847C15.8708 52.957 16.4508 52 17.5238 52Z"
                fill="#FF9D0B"
              />
              <path
                d="M38.5967 76.6898C41.3487 72.6538 41.1537 69.6248 37.3777 65.8508C33.6017 62.0778 31.4037 56.5578 31.4037 56.5578C31.4037 56.5578 30.5827 53.3518 28.7127 53.6468C26.8427 53.9418 25.4697 58.7328 29.3867 61.6638C33.3037 64.5938 28.6067 66.5848 27.0997 63.8328C25.5927 61.0808 21.4777 54.0058 19.3437 52.6528C17.2107 51.2998 15.7087 52.0578 16.2117 54.8468C16.7147 57.6358 25.6357 64.3958 24.7677 65.8588C23.8997 67.3208 20.8407 64.1398 20.8407 64.1398C20.8407 64.1398 11.2687 55.4288 9.18465 57.6988C7.10065 59.9688 10.7657 61.8708 15.9887 65.0328C21.2127 68.1938 21.6177 69.0288 20.8767 70.2248C20.1347 71.4208 8.60465 61.6998 7.52165 65.8208C6.43965 69.9418 19.2887 71.1378 18.4957 73.9828C17.7027 76.8288 9.44465 68.5978 7.75565 71.8048C6.06565 75.0128 19.4087 78.7818 19.5167 78.8098C23.8267 79.9278 34.7727 82.2968 38.5967 76.6898Z"
                fill="#FFD21E"
              />
              <path
                d="M77.3999 48C79.0189 48 80.4659 48.665 81.4749 49.871C82.0989 50.618 82.7509 51.822 82.8039 53.625C83.4829 53.43 84.1359 53.321 84.7459 53.321C86.2959 53.321 87.6959 53.915 88.6859 54.994C89.9579 56.379 90.5229 58.081 90.2769 59.784C90.1599 60.595 89.8889 61.322 89.4839 61.995C90.3379 62.686 90.9669 63.648 91.2709 64.805C91.5089 65.712 91.7529 67.601 90.4789 69.547C90.5599 69.674 90.6359 69.806 90.7069 69.941C91.4729 71.395 91.5219 73.038 90.8459 74.568C89.8209 76.887 87.2739 78.714 82.3279 80.675C79.2509 81.895 76.4359 82.675 76.4109 82.682C72.3429 83.737 68.6639 84.273 65.4789 84.273C59.6249 84.273 55.4339 82.48 53.0219 78.944C49.1399 73.25 49.6949 68.042 54.7179 63.022C57.4979 60.244 59.3459 56.148 59.7309 55.249C60.5069 52.587 62.5589 49.628 65.9699 49.628H65.9709C66.2579 49.628 66.5479 49.651 66.8339 49.696C68.3279 49.931 69.6339 50.791 70.5669 52.085C71.5739 50.833 72.5519 49.837 73.4369 49.275C74.7709 48.429 76.1039 48 77.3999 48ZM77.3999 52C76.8899 52 76.2669 52.217 75.5799 52.653C73.4469 54.006 69.3309 61.081 67.8239 63.833C67.3189 64.755 66.4559 65.145 65.6789 65.145C64.1369 65.145 62.9329 63.612 65.5379 61.664C69.4549 58.733 68.0809 53.942 66.2109 53.647C66.1289 53.634 66.0479 53.628 65.9699 53.628C64.2699 53.628 63.5199 56.558 63.5199 56.558C63.5199 56.558 61.3219 62.078 57.5459 65.851C53.7699 69.625 53.5749 72.654 56.3269 76.69C58.2039 79.442 61.7969 80.273 65.4789 80.273C69.2979 80.273 73.2129 79.379 75.4069 78.81C75.5149 78.782 88.8579 75.013 87.1679 71.805C86.8839 71.266 86.4159 71.05 85.8269 71.05C83.4469 71.05 79.1179 74.592 77.2569 74.592C76.8409 74.592 76.5479 74.415 76.4279 73.983C75.6349 71.138 88.4849 69.942 87.4019 65.821C87.2109 65.092 86.6929 64.796 85.9649 64.797C82.8199 64.797 75.7639 70.328 74.2849 70.328C74.1719 70.328 74.0909 70.295 74.0469 70.225C73.3059 69.029 73.7119 68.194 78.9349 65.033C84.1579 61.871 87.8239 59.969 85.7389 57.699C85.4989 57.437 85.1589 57.321 84.7459 57.321C81.5749 57.322 74.0829 64.14 74.0829 64.14C74.0829 64.14 72.0609 66.243 70.8379 66.243C70.5569 66.243 70.3179 66.132 70.1559 65.858C69.2889 64.396 78.2089 57.636 78.7119 54.847C79.0529 52.957 78.4729 52 77.3999 52Z"
                fill="#FF9D0B"
              />
              <path
                d="M56.3271 76.6898C53.5751 72.6538 53.7701 69.6248 57.5461 65.8508C61.3221 62.0778 63.5201 56.5578 63.5201 56.5578C63.5201 56.5578 64.3411 53.3518 66.2111 53.6468C68.0811 53.9418 69.4541 58.7328 65.5371 61.6638C61.6201 64.5938 66.3171 66.5848 67.8241 63.8328C69.3311 61.0808 73.4461 54.0058 75.5801 52.6528C77.7131 51.2998 79.2151 52.0578 78.7121 54.8468C78.2091 57.6358 69.2881 64.3958 70.1561 65.8588C71.0241 67.3208 74.0831 64.1398 74.0831 64.1398C74.0831 64.1398 83.6551 55.4288 85.7391 57.6988C87.8231 59.9688 84.1581 61.8708 78.9351 65.0328C73.7111 68.1938 73.3061 69.0288 74.0471 70.2248C74.7891 71.4208 86.3191 61.6998 87.4021 65.8208C88.4841 69.9418 75.6351 71.1378 76.4281 73.9828C77.2211 76.8288 85.4791 68.5978 87.1681 71.8048C88.8581 75.0128 75.5151 78.7818 75.4071 78.8098C71.0971 79.9278 60.1511 82.2968 56.3271 76.6898Z"
                fill="#FFD21E"
              />
            </svg>
            <span> Space: {data.user}/{data.spacename}</span>
          </div>
        </Box>
        <Box p={4}>
          {/* <iframe
            src={"https://" + data.user + "-" + data.spacename + ".hf.space"}
            frameborder="0"
            width="850"
            height="450"
          ></iframe> */}

          <gradio-app src={"https://" + data.user + "-" + data.spacename + ".hf.space"}></gradio-app>

        </Box>
      </Box>
    </Box >
  );
}



function parseContent(path: string, content: string): any[] {
  const extension = path.split(".").pop();
  if (["yaml", "yml"].includes(extension)) {
    return (load(content));
  } else {
    return [];
  }
}