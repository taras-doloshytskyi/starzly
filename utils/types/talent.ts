import { Tag, User } from './video';

export type LatestFeedback = {
  id: number;
  content: string;
  stars: number;
  status: string;
  created_at: Date;
  updated_at: Date;
};

export type MiniTages = {
  name_en: string;
  name_ar: string;
};

export type Customer = {
  id: number;
  full_name: string;
  avatar_url?: any;
  intro_video_url?: any;
  intro_video_thumbnail_url?: any;
};

export type LatestTwoFeedback = {
  id: number;
  order_id: number;
  video_id: number;
  talent_id: number;
  customer_id: number;
  content: string;
  stars: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  type: string;
  deleted_at?: any;
  customer: Customer;
};

export type Category = {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  order: number;
  featured: number;
  image: string;
  deleted_at?: any;
  country_code?: any;
};

export type ComplexTalent = {
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
  cost_business?: any;
  cost_business_ios?: any;
  cost_business_enabled: number;
  cost_message: string;
  cost_message_ios: string;
  chat_enabled: number;
  online: number;
  new: number;
  talent_flag_id?: any;
  deleted_at?: any;
  disable_apple_fees: number;
  followme_commission?: any;
  followme_enabled: number;
  farmer_id?: any;
  enable_audio: number;
  business_platform: string;
  same_day_video_delivery_enabled: number;
  country_id?: any;
  collection_id?: any;
  avatar_url: string;
  converted_cost: string;
  converted_cost_ios: string;
  converted_cost_business?: any;
  converted_cost_business_ios?: any;
  converted_cost_message: string;
  converted_cost_message_ios: string;
  converted_currency: string;
  talent_status_icon?: any;
  market: string;
  support_telephone: string;
  latest_feedback: LatestFeedback;
  total_feedbacks: number;
  average_rating: string;
  short_link: string;
  mini_tages: MiniTages;
  latest_two_feedback: LatestTwoFeedback[];
  latest_video: any[];
  business_video: any[];
  price?: any;
  category: Category;
  tags: Tag[];
  user: User;
  social_media_links: any[];
  social_prices: any[];
  categories: any[];
  country?: any;
  taxonomies: any[];
  boutique?: any;
};
