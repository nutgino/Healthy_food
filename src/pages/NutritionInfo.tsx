import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, Droplet, Zap, Shield, Heart, Brain } from "lucide-react";

const NutritionInfo = () => {
  const nutrients = [
    {
      icon: Zap,
      title: "คาร์โบไฮเดรต (Carbohydrates)",
      description: "คาร์โบไฮเดรตเป็นแหล่งพลังงานหลักของร่างกาย ร่างกายสามารถย่อยและเปลี่ยนเป็นน้ำตาลกลูโคสเพื่อนำไปใช้เลี้ยงสมอง กล้ามเนื้อ และระบบประสาท รวมถึงช่วยควบคุมระดับน้ำตาลในเลือดและเป็นตัวช่วยในการเผาผลาญไขมันอย่างสมดุล",
      benefits: ["เป็นแหล่งพลังงานหลักของร่างกาย ช่วยให้ทำกิจกรรมต่าง ๆ ได้อย่างมีประสิทธิภาพ", "ช่วยป้องกันการสลายโปรตีนมาใช้เป็นพลังงาน (ทำให้โปรตีนทำหน้าที่ซ่อมแซมและสร้างกล้ามเนื้อได้เต็มที่)", "ใยอาหารจากคาร์โบไฮเดรตเชิงซ้อนช่วยในการขับถ่ายและป้องกันท้องผูก" , "ช่วยควบคุมความอยากอาหาร ทำให้อิ่มนานเมื่อเลือกคาร์โบไฮเดรตเชิงซ้อน" , "มีส่วนช่วยในการทำงานของระบบประสาทให้เป็นปกติ"],
      sources: ["ข้าว", "ขนมปัง", "มันฝรั่ง", "ผลไม้", "พาสต้า"],
      recommend: "45-65% ของแคลอรี่ต่อวัน",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: Shield,
      title: "โปรตีน (Protein)", 
      description: "สารอาหารสำหรับการสร้างและซ่อมแซมเนื้อเยื่อ ให้พลังงาน 4 กิโลแคลอรี่ต่อกรัม",
      benefits: ["ซ่อมแซมและสร้างเนื้อเยื่อ กล้ามเนื้อ ผิวหนัง เส้นผม เล็บ และอวัยวะต่าง ๆ", "เป็นส่วนประกอบสำคัญของเอนไซม์ ฮอร์โมน และสารสื่อประสาทในร่างกาย", "ช่วยสร้างภูมิคุ้มกัน (แอนติบอดี) ป้องกันการติดเชื้อ" , "รักษาสมดุลของของเหลวและกรด-ด่างในร่างกาย" , "เป็นแหล่งพลังงานสำรอง เมื่อร่างกายขาดคาร์โบไฮเดรตและไขมัน" ],
      sources: ["ไก่", "ปลา", "ไข่", "ถั่ว", "นม"],
      recommend: "10-35% ของแคลอรี่ต่อวัน",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: Droplet,
      title: "ไขมัน (Fats)",
      description: "แหล่งพลังงานที่เข้มข้น ให้พลังงาน 9 กิโลแคลอรี่ต่อกรัม",
      benefits: ["เป็นแหล่งพลังงานสำรองที่ให้พลังงานสูง (มากกว่าคาร์โบไฮเดรตและโปรตีนต่อกรัม)", "ช่วยดูดซึมวิตามินที่ละลายในไขมัน (A, D, E, K)", "เป็นฉนวนกันความร้อน รักษาอุณหภูมิของร่างกาย" , "ป้องกันอวัยวะภายในจากแรงกระแทก (เป็นเบาะรองรับ)" , "เป็นส่วนประกอบสำคัญของเยื่อหุ้มเซลล์และโครงสร้างสมอง"],
      sources: ["น้ำมันมะกอก", "อะโวคาโด", "ถั่วอัลมอนด์", "ปลาแซลมอน"],
      recommend: "20-35% ของแคลอรี่ต่อวัน",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      icon: Apple,
      title: "วิตามิน (Vitamins)",
      description: "สารอาหารที่จำเป็นในปริมาณน้อย แต่สำคัญต่อการทำงานของร่างกาย",
      benefits: ["ช่วยควบคุมการทำงานของร่างกายให้เป็นปกติ (แม้ต้องการเพียงปริมาณเล็กน้อย)", "เสริมสร้างและบำรุงการทำงานของระบบภูมิคุ้มกัน", "มีบทบาทในการสร้างพลังงานจากคาร์โบไฮเดรต โปรตีน และไขมัน" , "ช่วยในการสร้างเม็ดเลือดแดงและการแข็งตัวของเลือด" , "ช่วยซ่อมแซมและบำรุงผิวหนัง ผม และเล็บ"],
      sources: ["ผลไม้", "ผัก", "นม", "เนื้อ", "ธัญพืช"],
      recommend: "ตามความต้องการรายวัน (RDA)",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: Heart,
      title: "เกลือแร่ (Minerals)",
      description: "ธาตุอนินทรีย์ที่จำเป็นสำหรับการทำงานของร่างกาย",
      benefits: ["ช่วยเสริมสร้างกระดูกและฟันให้แข็งแรง (เช่น แคลเซียม, ฟอสฟอรัส)", "ควบคุมสมดุลของน้ำและเกลือแร่ในร่างกาย (เช่น โซเดียม, โพแทสเซียม)", "มีบทบาทในการทำงานของระบบประสาทและกล้ามเนื้อ (เช่น แมกนีเซียม)" , "เป็นส่วนประกอบสำคัญของเม็ดเลือดและการลำเลียงออกซิเจน (เช่น ธาตุเหล็ก)" , "ช่วยในกระบวนการเผาผลาญอาหารและสร้างพลังงาน (เช่น สังกะสี, ไอโอดีน)"],
      sources: ["เกลือ", "นม", "ปลาเล็กปลาน้อย", "ผักใบเขียว"],
      recommend: "ตามความต้องการรายวัน (RDA)",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: Brain,
      title: "น้ำ (Water)",
      description: "สารอาหารที่สำคัญที่สุด ร่างกายต้องการมากที่สุด",
      benefits: ["เป็นองค์ประกอบหลักของร่างกาย (ประมาณ 60–70% ของน้ำหนักตัว)", "ช่วยควบคุมอุณหภูมิร่างกาย (ผ่านการเหงื่อและการระบายความร้อน)", "เป็นตัวกลางในการลำเลียงสารอาหาร ฮอร์โมน และออกซิเจนไปยังเซลล์ต่าง ๆ", "ช่วยขับของเสียออกจากร่างกายทางปัสสาวะ เหงื่อ และอุจจาระ" , "หล่อลื่นข้อต่อ ทำให้เคลื่อนไหวได้สะดวก"],
      sources: ["น้ำดื่ม", "ผลไม้", "ผัก", "นม", "ซุป"],
      recommend: "8-10 แก้วต่อวัน (2-2.5 ลิตร)",
      color: "bg-cyan-100 text-cyan-800",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          ข้อมูลโภชนาการพื้นฐาน
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          เรียนรู้เกี่ยวกับสารอาหารหลักที่ร่างกายต้องการ ประโยชน์ และแหล่งที่มา
        </p>
      </div>

      {/* Nutrition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nutrients.map((nutrient) => (
          <Card key={nutrient.title} className="shadow-card border-border hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <nutrient.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{nutrient.title}</CardTitle>
                  <Badge className={nutrient.color}>{nutrient.recommend}</Badge>
                </div>
              </div>
              <CardDescription className="text-muted-foreground leading-relaxed">
                {nutrient.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">ประโยชน์:</h4>
                <ul className="space-y-2">
                  {nutrient.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sources */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">แหล่งที่มา:</h4>
                <div className="flex flex-wrap gap-2">
                  {nutrient.sources.map((source, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-hero rounded-2xl p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            สำคัญ: ความสมดุลของสารอาหาร
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            การรับประทานอาหารที่มีสารอาหารครบถ้วนและสมดุลเป็นพื้นฐานสำคัญของสุขภาพที่ดี 
            แต่ละสารอาหารมีหน้าที่และความสำคัญแตกต่างกัน การขาดหรือได้รับมากเกินไปอาจส่งผลต่อสุขภาพ 
            จึงควรศึกษาและวางแผนการรับประทานอาหารอย่างรอบคอบ
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionInfo;