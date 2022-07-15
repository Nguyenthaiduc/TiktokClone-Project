import { Key } from "react";

export interface DataApi {
    id: Key | null | undefined
  
    
    data : [
        {
        id : number,
        first_name : string,
        last_name : string,
        full_name : string,
        nickname: string,
        avatar : string,
        bio : string,
        tick : boolean,
        followings_count : number,
        followers_count : number,
        likes_count : number,
        website_url : string,
        facebook_url : string,
        youtube_url : string,
        twitter_url: string,
        instagram_url: string,
        created_at : string,
        updated_at : string,

        }
    ],
    meta?: {
        pagination : {
            total : number,
            count : number,
            per_page : number,
            current_page : number,
            total_pages : number,
            links : {}
        }
    }
}

export interface Data {
        
    
        data : {

            id : number,
            first_name : string,
            last_name : string,
            full_name : string,
            nickname: string,
            avatar : string,
            bio : string,
            tick : boolean,
            followings_count : number,
            followers_count : number,
            likes_count : number,
            website_url : string,
            facebook_url : string,
            youtube_url : string,
            twitter_url: string,
            instagram_url: string,
            created_at : string,
            updated_at : string,
        }



        
   
}