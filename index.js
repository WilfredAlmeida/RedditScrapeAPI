const snoowrap = require("snoowrap")
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 2000

app.use(cors())

app.get("/getMemes",async (req,res)=>{

    try {

        const r = new snoowrap({
            userAgent: process.env.USER_AGENT,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            username: process.env.USERID,
            password: process.env.PASSWORD,
        });

        const subreddit = r.getSubreddit('IndianDankMemes')
        const topPosts = await subreddit.getTop({ time: 'today', limit: 4 });

        var data = []

        for(var i=0;i<topPosts.length;i++){
            // data.push({
            //     title:topPosts[i].title,
            //     url:topPosts[i].url
            // })
            data.push(topPosts[i].url)
        }

        res.status(200).json(data)

    }
    catch (e) {
        console.log(e);
    }

})

app.listen(port,()=>{
    console.log("Listening on port "+port);
})

/*

[
	{
		"allow_live_comments": false,
		"approved_at_utc": null,
		"approved_by": null,
		"archived": false,
		"author": "InfiniteAmbassador40",
		"author_flair_background_color": null,
		"author_flair_css_class": null,
		"author_flair_richtext": [],
		"author_flair_template_id": null,
		"author_flair_text": null,
		"author_flair_text_color": null,
		"author_flair_type": "text",
		"author_fullname": "t2_b4vf6teo",
		"author_is_blocked": false,
		"author_patreon_flair": false,
		"author_premium": false,
		"awarders": [],
		"banned_at_utc": null,
		"banned_by": null,
		"can_gild": true,
		"can_mod_post": false,
		"category": null,
		"clicked": false,
		"comments": [],
		"content_categories": null,
		"contest_mode": false,
		"created": 1653998329,
		"created_utc": 1653998329,
		"discussion_type": null,
		"distinguished": null,
		"domain": "v.redd.it",
		"downs": 0,
		"edited": false,
		"gilded": 0,
		"gildings": {
			"gid_1": 1
		},
		"hidden": false,
		"hide_score": false,
		"id": "v1olga",
		"is_created_from_ads_ui": false,
		"is_crosspostable": true,
		"is_meta": false,
		"is_original_content": false,
		"is_reddit_media_domain": true,
		"is_robot_indexable": true,
		"is_self": false,
		"is_video": true,
		"likes": null,
		"link_flair_background_color": "",
		"link_flair_css_class": null,
		"link_flair_richtext": [],
		"link_flair_text": null,
		"link_flair_text_color": "dark",
		"link_flair_type": "text",
		"locked": true,
		"media": {
			"reddit_video": {
				"bitrate_kbps": 2400,
				"fallback_url": "https://v.redd.it/9iiojb7jws291/DASH_720.mp4?source=fallback",
				"height": 720,
				"width": 720,
				"scrubber_media_url": "https://v.redd.it/9iiojb7jws291/DASH_96.mp4",
				"dash_url": "https://v.redd.it/9iiojb7jws291/DASHPlaylist.mpd?a=1656660964%2CYjYyZmUyOWFlNDRiNGM1YmU4NjMwN2QxOTg1ZDdhOTI3YTE5NGY3NzZjMDEwOTEyNWZkYjE2ZjZlYzgzOGFhNQ%3D%3D&v=1&f=sd",
				"duration": 20,
				"hls_url": "https://v.redd.it/9iiojb7jws291/HLSPlaylist.m3u8?a=1656660964%2CNzEwNGUwODcyNTdkMTE1MTNlYjhmMjVlZjNjYmVlOTU5MTM4YjZjMjJkNDY2MmFkYzczNTE5MjYzODA0YmE4Yw%3D%3D&v=1&f=sd",
				"is_gif": false,
				"transcoding_status": "completed"
			}
		},
		"media_embed": {},
		"media_only": false,
		"mod_note": null,
		"mod_reason_by": null,
		"mod_reason_title": null,
		"mod_reports": [],
		"name": "t3_v1olga",
		"no_follow": false,
		"num_comments": 51,
		"num_crossposts": 0,
		"num_reports": null,
		"over_18": false,
		"parent_whitelist_status": "no_ads",
		"permalink": "/r/IndianDankMemes/comments/v1olga/are_yaar_koi_bhajan_kyu_nahi_daalta_iss_subreddit/",
		"pinned": false,
		"post_hint": "hosted:video",
		"preview": {
			"images": [
				{
					"source": {
						"url": "https://external-preview.redd.it/dPXmUH_63zpsVpyEfZcKwI_-Ql1bV_9EmPD5_SFkuSM.png?format=pjpg&auto=webp&s=d924502fdd2bc339619a595e9b39b449f820d0ed",
						"width": 720,
						"height": 720
					},
					"resolutions": [
						{
							"url": "https://external-preview.redd.it/dPXmUH_63zpsVpyEfZcKwI_-Ql1bV_9EmPD5_SFkuSM.png?width=108&crop=smart&format=pjpg&auto=webp&s=24c03ac243c175d89d2eee57a72cbadf4577e737",
							"width": 108,
							"height": 108
						},
						{
							"url": "https://external-preview.redd.it/dPXmUH_63zpsVpyEfZcKwI_-Ql1bV_9EmPD5_SFkuSM.png?width=216&crop=smart&format=pjpg&auto=webp&s=5318212b0a8d3f46793fde0c03ae6eb358e1ace0",
							"width": 216,
							"height": 216
						},
						{
							"url": "https://external-preview.redd.it/dPXmUH_63zpsVpyEfZcKwI_-Ql1bV_9EmPD5_SFkuSM.png?width=320&crop=smart&format=pjpg&auto=webp&s=34ff2d984e9f2e5a8571358d6507885849a9774e",
							"width": 320,
							"height": 320
						},
						{
							"url": "https://external-preview.redd.it/dPXmUH_63zpsVpyEfZcKwI_-Ql1bV_9EmPD5_SFkuSM.png?width=640&crop=smart&format=pjpg&auto=webp&s=8b95119e9ddb3985bbf687eb506519a503b15583",
							"width": 640,
							"height": 640
						}
					],
					"variants": {},
					"id": "IR_cbYD5YE6wgYcxNuN3e1s6-I5HGr5pxeEuPOk-7aI"
				}
			],
			"enabled": false
		},
		"pwls": 0,
		"quarantine": false,
		"removal_reason": null,
		"removed_by": null,
		"removed_by_category": null,
		"report_reasons": null,
		"saved": false,
		"score": 2408,
		"secure_media": {
			"reddit_video": {
				"bitrate_kbps": 2400,
				"fallback_url": "https://v.redd.it/9iiojb7jws291/DASH_720.mp4?source=fallback",
				"height": 720,
				"width": 720,
				"scrubber_media_url": "https://v.redd.it/9iiojb7jws291/DASH_96.mp4",
				"dash_url": "https://v.redd.it/9iiojb7jws291/DASHPlaylist.mpd?a=1656660964%2CYjYyZmUyOWFlNDRiNGM1YmU4NjMwN2QxOTg1ZDdhOTI3YTE5NGY3NzZjMDEwOTEyNWZkYjE2ZjZlYzgzOGFhNQ%3D%3D&v=1&f=sd",
				"duration": 20,
				"hls_url": "https://v.redd.it/9iiojb7jws291/HLSPlaylist.m3u8?a=1656660964%2CNzEwNGUwODcyNTdkMTE1MTNlYjhmMjVlZjNjYmVlOTU5MTM4YjZjMjJkNDY2MmFkYzczNTE5MjYzODA0YmE4Yw%3D%3D&v=1&f=sd",
				"is_gif": false,
				"transcoding_status": "completed"
			}
		},
		"secure_media_embed": {},
		"selftext": "",
		"selftext_html": null,
		"send_replies": true,
		"spoiler": false,
		"stickied": false,
		"subreddit": "IndianDankMemes",
		"subreddit_id": "t5_3mnyi",
		"subreddit_name_prefixed": "r/IndianDankMemes",
		"subreddit_subscribers": 332289,
		"subreddit_type": "public",
		"suggested_sort": null,
		"thumbnail": "https://b.thumbs.redditmedia.com/jECguodZQPLEnBjyfoCMM48w-IGS_NUHlL5kE6Si5CA.jpg",
		"thumbnail_height": 140,
		"thumbnail_width": 140,
		"title": "are yaar koi bhajan kyu nahi daalta iss subreddit pe",
		"top_awarded_type": null,
		"total_awards_received": 4,
		"treatment_tags": [],
		"ups": 2408,
		"upvote_ratio": 0.95,
		"url": "https://v.redd.it/9iiojb7jws291",
		"url_overridden_by_dest": "https://v.redd.it/9iiojb7jws291",
		"user_reports": [],
		"view_count": null,
		"visited": false,
		"whitelist_status": "no_ads",
		"wls": 0
	}
]
*/