import React, { useState } from "react";
import {
  Container,
  Row,
  Spinner,
  ImageContainer,
  Dog,
  Button,
} from "./components";

function App() {
  const [url, setUrl] = useState<string>("");
  const [opacity, setOpacity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  async function getDogPicture() {
    try {
      setOpacity(0);
      setUrl("");
      setLoading(true);
      while (true) {
        const response = await fetch("https://random.dog/woof.json");
        const { url }: { url: string } = await response.json();
        const fileType: string = url.split(".")[2];
        if (fileType === "mp4" || fileType === "webm") {
          continue;
        } else {
          setUrl(url);
          break;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onButtonClick = () => getDogPicture();

  const onImageLoad = () => setOpacity(1);

  React.useEffect(() => {
    getDogPicture();
  }, []);

  React.useEffect(() => {
    if (opacity === 1) {
      setLoading(false);
    }
  }, [opacity]);

  return (
    <Container>
      <Row>
        {loading ? <Spinner /> : null}
        <ImageContainer opacity={opacity}>
          {url && <Dog src={url} alt="dog" onLoad={onImageLoad} />}
        </ImageContainer>
        <Button onClick={onButtonClick}>Get dog picture</Button>
      </Row>
    </Container>
  );
}

export default App;
