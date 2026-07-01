import Prayer from "./component/Prayer"


function App() {
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

  return (
    <section>
      <div className="containar">
        <div className="top_sec">
          <div className="city">
                <h3>المدينة</h3>

                <select name="" id="">
                  {cities.map((city_obj) => (
                    <option key={city_obj.value} value={city_obj.value}>{city_obj.name}</option>
                  ))}
                </select>
          </div>
          <div className="date">
              <h3>التاريخ</h3>
              <h4>30-6-2026</h4>
          </div>
        </div>
        <Prayer name="الفجر" time="04:12"/>
        <Prayer name="الظهر" time="05:12"/>
        <Prayer name="العصر" time="06:12"/>
        <Prayer name="المغرب" time="07:12"/>
        <Prayer name="العشاء" time="09:12"/>
      </div>
    </section>
  )
}

export default App
