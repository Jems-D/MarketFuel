using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class LatestNews
    {
        public class NewsProperties
        {
            public string? TYPE { get; set; }
            public int? ID { get; set; }
            public string? GUID { get; set; }
            public int? PUBLISHED_ON { get; set; }
            public int? PUBLISHED_ON_NS { get; set; }
            public string? IMAGE_URL { get; set; }
            public string? TITLE { get; set; }
            public string? SUBTITLE { get; set; }
            public string? AUTHORS { get; set; }
            public string? URL { get; set; }
            public int? SOURCE_ID { get; set; }
            public string? BODY { get; set; }
            public string? KEYWORDS { get; set; }
            public string? LANG { get; set; }
            public int? UPVOTES { get; set; }
            public int? DOWNVOTES { get; set; }
            public int? SCORE { get; set; }
            public string? SENTIMENT { get; set; }
            public string? STATUS { get; set; }
            public int? CREATED_ON { get; set; }
            public int? CREATED_BY { get; set; }
            public string? CREATED_BY_USERNAME { get; set; }
            public int? UPDATED_ON { get; set; }
            public int? UPDATED_BY { get; set; }
            public string? UPDATED_BY_USERNAME { get; set; }
            public SOURCEDATA? SOURCE_DATA { get; set; }
            public List<CATEGORYDATA?> CATEGORY_DATA { get; set; }
            public SOURCEKEY? SOURCE_KEY { get; set; }
            public NAME? NAME { get; set; }
            public SOURCETYPE? SOURCE_TYPE { get; set; }
            public LAUNCHDATE? LAUNCH_DATE { get; set; }
            public SORTORDER? SORT_ORDER { get; set; }
            public CALLTIMEOUT? CALL_TIMEOUT { get; set; }
            public SKIPARTICLEIMAGE? SKIP_ARTICLE_IMAGE { get; set; }
            public BENCHMARKSCORE? BENCHMARK_SCORE { get; set; }
            public LASTUPDATEDTS? LAST_UPDATED_TS { get; set; }
            public LASTARTICLEPUBLISHEDAT? LAST_ARTICLE_PUBLISHED_AT { get; set; }
            public LASTCALL? LAST_CALL { get; set; }
            public LASTCALLSUCCESS? LAST_CALL_SUCCESS { get; set; }
            public CATEGORY? CATEGORY { get; set; }
        }

        public class AUTHORS
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class BENCHMARKSCORE
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class BODY
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class CALLTIMEOUT
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class CATEGORY
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? example { get; set; }
        }

        public class CATEGORYDATA
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public Items items { get; set; }
        }

        public class CREATEDBY
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class CREATEDBYUSERNAME
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class CREATEDON
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? format { get; set; }
            public int example { get; set; }
        }

        public class Data
        {
            public string? type { get; set; }
            public Items items { get; set; }
        }

        public class DOWNVOTES
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class Err
        {
            public string? type { get; set; }
            public NewsProperties properties { get; set; }
        }

        public class GUID
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class ID
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class IMAGEURL
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class Items
        {
            public string? type { get; set; }
            public NewsProperties properties { get; set; }
        }

        public class KEYWORDS
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class LANG
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? @default { get; set; }
            public string? example { get; set; }
        }

        public class LASTARTICLEPUBLISHEDAT
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
            public string? format { get; set; }
        }

        public class LASTCALL
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
            public string? format { get; set; }
        }

        public class LASTCALLSUCCESS
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
            public string? format { get; set; }
        }

        public class LASTUPDATEDTS
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
            public string? format { get; set; }
        }

        public class LAUNCHDATE
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? format { get; set; }
        }

        public class NAME
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class PUBLISHEDON
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? format { get; set; }
        }

        public class PUBLISHEDONNS
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? format { get; set; }
        }

        public class Root
        {
            public List<NewsProperties> Data { get; set; }
            public Err Err { get; set; }
        }

        public class SCORE
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class SENTIMENT
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? @default { get; set; }
            public string? example { get; set; }
        }

        public class SKIPARTICLEIMAGE
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class SORTORDER
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class SOURCEDATA
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public NewsProperties properties { get; set; }
        }

        public class SOURCEID
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class SOURCEKEY
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class SOURCETYPE
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? example { get; set; }
        }

        public class STATUS
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? @default { get; set; }
            public string? example { get; set; }
        }

        public class SUBTITLE
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class TITLE
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class TYPE
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? example { get; set; }
        }

        public class UPDATEDBY
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class UPDATEDBYUSERNAME
        {
            public string? type { get; set; }
            public string? description { get; set; }
        }

        public class UPDATEDON
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? format { get; set; }
            public int example { get; set; }
        }

        public class UPVOTES
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public int example { get; set; }
        }

        public class URL
        {
            public string? type { get; set; }
            public string? description { get; set; }
            public string? example { get; set; }
        }
    }
}
