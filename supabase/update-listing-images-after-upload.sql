-- Run this after uploading E:\campiq图片 into the public Supabase Storage bucket: listing-images
-- The uploaded Storage paths must stay like: listing-images/<listing title folder>/<image file>
-- This updates listings.images by matching public.listings.title to each local folder name.

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%202026%20Sublease%20Available/707421334_1008416998378980_56082020049624862_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%202026%20Sublease%20Available/707506391_1008417008378979_4150621209484048348_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%202026%20Sublease%20Available/708451242_1008416868378993_1991009713594808492_n.jpg'
]::text[]
where title = 'Fall 2026 Sublease Available';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%20Sublease%20Available%20%2065%20Trigo/707855829_1034177285941333_7011699657474665_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%20Sublease%20Available%20%2065%20Trigo/708488599_1034177315941330_696437652948963671_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Fall%20Sublease%20Available%20%2065%20Trigo/709305812_1034177295941332_2594474102512227643_n.jpg'
]::text[]
where title = 'Fall Sublease Available  65 Trigo';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708345524_976163791985705_462420438834964200_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708345524_976163861985698_9166606563026209731_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708376613_976164005319017_6252607437289041174_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708376962_976163798652371_6436443465029429572_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708376989_976163888652362_3791706982016472609_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708437176_976163808652370_4281609435410324109_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/708450842_976163788652372_8157414295455344672_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/709507826_976164021985682_3114603757604552111_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/GIRLS%20ONLY%20SUMMER%20SUBLEASE%20%E2%80%94%20BIG%20SINGLE%20ROOM/709723682_976163681985716_9082817777353925392_n.jpg'
]::text[]
where title = 'GIRLS ONLY SUMMER SUBLEASE — BIG SINGLE ROOM';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/707679163_122175814778913308_6611088640523192498_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/707798496_122175814826913308_1968620886711199583_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/707838686_122175814742913308_2765889374530761535_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/708222256_122175814718913308_1725093907453277938_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/709756456_122175814814913308_5591683577328850498_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/709782726_122175814706913308_5436534629790145638_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Housing%20Sublet%20Available%20%20Summer%202026/709841530_122175814754913308_6932454150019610977_n.jpg'
]::text[]
where title = 'Housing Sublet Available  Summer 2026';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/707750608_122217167936537062_2963257017666229993_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708503250_122217168224537062_870823587595241757_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708877468_122217168200537062_4026635367645386491_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708881792_122217168170537062_8570862914889096326_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708882164_122217168236537062_2663719430504678686_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708910847_122217168182537062_4269033143733430758_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708953598_122217168248537062_7197997455397007825_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/708986914_122217168212537062_4581252395200127228_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/IV%20El%20Embarcadero%20Summer%20Female%20Spot%20Sublease%20(Near%20Beach%20%26%20Campus)/710745965_122217168260537062_2945000771294772991_n.jpg'
]::text[]
where title = 'IV El Embarcadero Summer Female Spot Sublease (Near Beach & Campus)';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20a%20male%20subleaser%20fall%20quarter%202026%2C%206730%20Trigo/708634006_2066882281377311_2363507517580431421_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20a%20male%20subleaser%20fall%20quarter%202026%2C%206730%20Trigo/709566823_2066882274710645_5013205971868013666_n.jpg'
]::text[]
where title = 'Looking for a male subleaser fall quarter 2026, 6730 Trigo';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20a%20roommate%20for%20a%20summer%20sublease%20from%20June-September/709864978_122250001502253878_8977340836189922589_n.jpg'
]::text[]
where title = 'Looking for a roommate for a summer sublease from June-September';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/706336973_1308543664744098_294082064308319509_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/706734968_1308543618077436_3423413090242584479_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/707248470_1308543651410766_7150946831827458672_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/707678459_1308543598077438_8503762849924197335_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/708243623_1308543684744096_474530741176402171_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/708489007_1308543604744104_8490330884187368156_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/708632819_1308543624744102_1558141922902512689_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/708753277_1308543694744095_8918001693223866106_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Looking%20for%20roommate%20in%20brand%20new%20house!!/709655114_1308543574744107_1067623185701006506_n.jpg'
]::text[]
where title = 'Looking for roommate in brand new house!!';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/708450551_122172164354966821_509653215523426653_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/709578632_122172164264966821_2877026000793215822_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/709637676_122172164270966821_4718418335101448320_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/709700943_122172164426966821_6416292129268124271_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/709901002_122172164258966821_1490532358526287694_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/NEED%20SUMMER%20SUB-LEASER%20ASAP!!!!/710799373_122172164342966821_8362102248089618292_n.jpg'
]::text[]
where title = 'NEED SUMMER SUB-LEASER ASAP!!!!';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%202026%20SUBLEASE%20IV/708320198_1649572689662964_8218415654962376239_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%202026%20SUBLEASE%20IV/708376965_1649572726329627_2933231549991914672_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%202026%20SUBLEASE%20IV/708415283_1649572732996293_5829599110798346951_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%202026%20SUBLEASE%20IV/709526098_1649572762996290_1439461724788814430_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%202026%20SUBLEASE%20IV/709526647_1649572692996297_3979435571751177316_n.jpg'
]::text[]
where title = 'SUMMER 2026 SUBLEASE IV';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/707965184_1002543718996894_1681235181869133096_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/708911121_1002543715663561_193659586662455901_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/709017134_1002543725663560_4689463360376094389_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/709024351_1002543705663562_1461375135974946470_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/709410857_1002543722330227_766843375714817005_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/710431600_1002543712330228_7100343761359008163_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20INTO%2026%E2%80%99-27%E2%80%99%20LEASE%20TAKEOVER/710745386_1002543708996895_7789225467147506943_n.jpg'
]::text[]
where title = 'SUMMER INTO 26’-27’ LEASE TAKEOVER';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20SUBLEASE%20JUNE%2020%20%E2%80%93%20AUGUST%2020/709287264_122213602454374193_4580750816426664878_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20SUBLEASE%20JUNE%2020%20%E2%80%93%20AUGUST%2020/709386030_122213602436374193_1939872604657906027_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20SUBLEASE%20JUNE%2020%20%E2%80%93%20AUGUST%2020/709636917_122213602394374193_6969634915119858077_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20SUBLEASE%20JUNE%2020%20%E2%80%93%20AUGUST%2020/710406430_122213602424374193_8681439311857455593_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SUMMER%20SUBLEASE%20JUNE%2020%20%E2%80%93%20AUGUST%2020/710849042_122213602388374193_3287753436007766387_n.jpg'
]::text[]
where title = 'SUMMER SUBLEASE JUNE 20 – AUGUST 20';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/706584257_10232472271977059_5096410161592742273_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/708006530_10232472271897057_8787058245212470319_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/708254824_10232472272697077_8298373272874689692_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/708910683_10232472271377044_2190057834168528438_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/710059275_10232472271257041_1331106124166584003_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20Shared%20Room%20Sublet%20in%20Isla%20Vista/710138660_10232472272817080_8865263508674036023_n.jpg'
]::text[]
where title = 'Summer Shared Room Sublet in Isla Vista';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/707436575_122172649514859076_8707690149843957888_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/707454897_122172649310859076_4083947233867093957_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/707693798_122172649424859076_4013687745568463901_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/707855789_122172649304859076_3130419442364051403_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/708928101_122172649406859076_6264223401057030448_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/709001267_122172649526859076_1700371716101367802_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/709689477_122172649628859076_5433279281279164341_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/Summer%20sublease%20(potentially%20lease%20take%20over)/710373023_122172649592859076_3853680493576390209_n.jpg'
]::text[]
where title = 'Summer sublease (potentially lease take over)';

update public.listings
set images = array[
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707455741_122279923694532154_736936064823088919_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707562691_122279923628532154_5924875312383798706_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707562691_122279923658532154_8958283877354736994_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707617889_122279923646532154_467212162763731049_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707678472_122279923682532154_3966768650136076953_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707693818_122279923718532154_7846687846578900082_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/707891602_122279923670532154_4244261011271042757_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/708443024_122279923706532154_742935514808740765_n.jpg',
  'https://yrjxadfyjaofmcnveohp.supabase.co/storage/v1/object/public/listing-images/SummerFall%20Sublease%20Available%20at%2065%20Trigo/708855301_122279923616532154_3133740281815789242_n.jpg'
]::text[]
where title = 'SummerFall Sublease Available at 65 Trigo';
