export type User = {
  id: number;
  avatar_url: string;
  intro_video_url: string;
  intro_video_thumbnail_url: string;
};

export type Tag = {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  order: number;
  featured: number;
  deleted_at?: any;
  type: string;
};

export type Talent = {
  id: number;
  slug: string;
  category_id: number;
  user_id: number;
  name_en: string;
  name_ar: string;
  bio_en: string;
  bio_ar: string;
  featured: number;
  verified: number;
  status: string;
  response_time: number;
  cost: string;
  order: number;
  recommended: number;
  cost_ios: string;
  legend: number;
  zoom_link?: any;
  cost_business: string;
  cost_business_ios: string;
  cost_business_enabled: number;
  cost_message: string;
  cost_message_ios: string;
  chat_enabled: number;
  online: number;
  new: number;
  talent_flag_id: number;
  deleted_at?: any;
  disable_apple_fees: number;
  followme_commission: number;
  followme_enabled: number;
  farmer_id?: any;
  enable_audio: number;
  business_platform: string;
  same_day_video_delivery_enabled: number;
  country_id: number;
  collection_id: number;
  avatar_url: string;
  converted_cost: string;
  converted_cost_ios: string;
  converted_cost_business: string;
  converted_cost_business_ios: string;
  converted_cost_message: string;
  converted_cost_message_ios: string;
  converted_currency: string;
  talent_status_icon?: any;
  market: string;
  support_telephone: string;
  price?: any;
  user: User;
  tags: Tag[];
};

export type Occasion = {
  id: number;
  title_en: string;
  title_ar: string;
  image_emojy: string;
  description_en: string;
  description_ar: string;
  type: string;
  order: number;
  created_at: Date;
  updated_at: Date;
  image_url: string;
};

export type Video = {
  id: number;
  talent_id: number;
  customer_id: number;
  order_id: number;
  from: string;
  to: string;
  status: string;
  transcoding_status: string;
  created_at: Date;
  updated_at: Date;
  featured: number;
  deleted_at?: any;
  occasion_id: number;
  url: string;
  thumbnail: string;
  is_business: number;
  talent: Talent;
  occasion: Occasion;
};

export type GetVideosResponse = {
  current_page: number;
  data: Video[];
};
