export interface PetInfo {
  pet_birth_date: string | null;
  pet_weight: number | null;
  pet_type: string | null;
  pet_species: string | null;
  pet_allergy: string | null;
  pet_shape: string | null;
  pet_disease: string | null;
  pet_neutering: boolean | null;
  pet_time_with: string | null;
  pet_favorite_maker: string | null;
  request_text: string | null;
}

export interface AnimalHospital {
  id: number;
  name: string;
  street_address: string;
  latitude: number;
  longitude: number;
  tell: string;
  categories: string[];
  veterinarian_numbers: number;
  scale: string;
  distance: string;
}

export interface AnimalHospitalSearchResponse {
  data: AnimalHospital[];
  timestamp: number[];
}
