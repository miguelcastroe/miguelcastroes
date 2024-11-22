type EXIF = {
  ISO: number;
  Make: string;
  Model: string;
  FNumber?: number;
  LensMake?: string;
  latitude?: number;
  LensModel?: string;
  longitude?: number;
  FocalLength?: number;
  GPSLatitude?: [number, number, number];
  ExposureTime: number;
  GPSLongitude?: [number, number, number];
  GPSLatitudeRef?: "N" | "S";
  GPSLongitudeRef?: "E" | "W";
  DateTimeOriginal: string;
  FocalLengthIn35mmFormat?: number;
  ISOSpeedRatings?: number;
  Orientation?: number;
};