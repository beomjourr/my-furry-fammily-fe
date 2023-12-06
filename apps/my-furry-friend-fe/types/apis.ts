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

export interface SearchHospitalParams {
  name: string | null;
  regions: string[] | null;
  scales: string[] | null;
  categories: string[] | null;
  latitudes: number | null;
  longitude: number | null;
  distance: number | null;
}
