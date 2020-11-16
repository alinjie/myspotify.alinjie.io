import Container from "components/Container";

export default function Loader() {
  return (
    <Container className="flex justify-center">
      <svg
        width="76"
        height="32"
        viewBox="0 0 76 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-spotify-green"
      >
        <line
          x1="3"
          y1="1.31134e-07"
          x2="3"
          y2="32"
          className="stroke-current animate-scale-y-1000 origin-center"
          strokeWidth="6"
        />
        <line
          x1="13"
          y1="1.31134e-07"
          x2="13"
          y2="32"
          className="stroke-current animate-scale-y-600 origin-center"
          strokeWidth="6"
        />
        <line
          x1="23"
          y1="1.31134e-07"
          x2="23"
          y2="32"
          className="stroke-current animate-scale-y-1400 origin-center"
          strokeWidth="6"
        />
        <line
          x1="33"
          y1="1.31134e-07"
          x2="33"
          y2="32"
          className="stroke-current animate-scale-y-400 origin-center"
          strokeWidth="6"
        />
        <line
          x1="43"
          y1="1.31134e-07"
          x2="43"
          y2="32"
          className="stroke-current animate-scale-y-800 origin-center"
          strokeWidth="6"
        />
        <line
          x1="53"
          y1="1.31134e-07"
          x2="53"
          y2="32"
          className="stroke-current animate-scale-y-1200 origin-center"
          strokeWidth="6"
        />
        <line
          x1="63"
          y1="1.31134e-07"
          x2="63"
          y2="32"
          className="stroke-current animate-scale-y-800 origin-center"
          strokeWidth="6"
        />

        <line
          x1="73"
          y1="1.31134e-07"
          x2="73"
          y2="32"
          className="stroke-current animate-scale-y-400 origin-center"
          strokeWidth="6"
        />
      </svg>
    </Container>
  );
}
