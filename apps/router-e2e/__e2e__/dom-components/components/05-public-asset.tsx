'use dom';

export default function Page() {
  return (
    <img
      src={`${process.env.EXPO_DOM_BASE_URL}/react-logo.png`}
      width={128}
      height={128}
      alt="React logo"
    />
  );
}
