import { useEffect, useState } from "react";
import Prayer from "./component/Prayer"


    


function App() {

    const [prayerTimes , setPrayerTimes] = useState({})
    const [dateTimes , setDateTimes] = useState("")
    const [city , setCity] = useState("Cario")

    const cities = [
  { name: 'القاهرة', value: 'Cairo' },
  { name: 'الإسكندرية', value: 'Alexandria' },
  { name: 'الجيزة', value: 'Giza' },
  { name: 'القليوبية', value: 'Qalyubia' },
  { name: 'بورسعيد', value: 'Port Said' },
  { name: 'السويس', value: 'Suez' },
  { name: 'الإسماعيلية', value: 'Ismailia' },
  { name: 'الدقهلية (المنصورة)', value: 'Mansoura' },
  { name: 'الشرقية', value: 'Sharqia' },
  { name: 'الغربية (طنطا)', value: 'Tanta' },
  { name: 'المنوفية', value: 'Monufia' },
  { name: 'دمياط', value: 'Damietta' },
  { name: 'كفر الشيخ', value: 'Kafr El Sheikh' },
  { name: 'الفيوم', value: 'Fayoum' },
  { name: 'بني سويف', value: 'Beni Suef' },
  { name: 'المنيا', value: 'Minya' },
  { name: 'أسيوط', value: 'Asyut' },
  { name: 'سوهاج', value: 'Sohag' },
  { name: 'قنا', value: 'Qena' },
  { name: 'الأقصر', value: 'Luxor' },
  { name: 'أسوان', value: 'Aswan' },
  { name: 'البحر الأحمر (الغردقة)', value: 'Hurghada' },
  { name: 'الوادى الجديد', value: 'New Valley' },
  { name: 'مطروح', value: 'Matrouh' },
  { name: 'شمال سيناء', value: 'North Sinai' },
  { name: 'جنوب سيناء (شرم الشيخ)', value: 'Sharm El Sheikh' },
  { name: 'البحيرة (دمنهور)', value: 'Damanhour' }
];
    console.log(city);
  useEffect(() => {
    
    const fetchPrayerTimes = async () =>{
      try{

          const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/current?city=${city}&country=Egypt`)
          const date_Prayer = await response.json()

          setPrayerTimes(date_Prayer.data.timings)
          setDateTimes(date_Prayer.data.date.gregorian.date)

          console.log(date_Prayer.data.date.gregorian.date);

      }catch(error){
        console.error(error)
      }
    } 

    fetchPrayerTimes()

  },[city])

    const formatTimes = (time) =>{
      if(!time){
        return "00:00";
      }
      let [hours , minutes] = time.split(":").map(Number)
      const perd = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      return `${minutes < 10 ? "0" + minutes : minutes} : ${hours} ${perd}`
    }



  return (
    <section>
      <div className="containar">
        <div className="top_sec">
          <div className="city">
                <h3>المدينة</h3>

                <select name="" id="" onChange={(e) => setCity(e.target.value)}>
                  {cities.map((city_obj) => (
                    <option key={city_obj.value} value={city_obj.value}>{city_obj.name}</option>
                  ))}
                </select>
          </div>
          <div className="date">
              <h3>التاريخ</h3>
              <h4>{dateTimes}</h4>
          </div>
        </div>
        <Prayer name="الفجر" time={formatTimes(prayerTimes.Fajr)}/>
        <Prayer name="الشروق" time={formatTimes(prayerTimes.Sunrise)}/>
        <Prayer name="الظهر" time={formatTimes(prayerTimes.Dhuhr)}/>
        <Prayer name="العصر" time={formatTimes(prayerTimes.Asr)}/>
        <Prayer name="المغرب" time={formatTimes(prayerTimes.Maghrib)}/>
        <Prayer name="العشاء" time={formatTimes(prayerTimes.Isha)}/>
      </div>
    </section>
  )
}

export default App
