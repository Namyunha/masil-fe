import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

type KakaoMapProps = {
  cafeLocax: number;
  cafeLocay: number;
  mapKey: string;
};

export default function KakaoMap({
  cafeLocax,
  cafeLocay,
  mapKey,
}: KakaoMapProps) {
  useKakaoLoader({
    appkey: mapKey,
  });

  return (
    <Map
      center={{ lat: cafeLocay, lng: cafeLocax }}
      className="w-full h-[200px] border border-stroke_focused"
      level={5}>
      <MapMarker position={{ lat: cafeLocay, lng: cafeLocax }} />
    </Map>
  );
}
