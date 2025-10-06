import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Baby, Users, Heart, Activity, Brain, Shield } from "lucide-react";

const NutritionGuide = () => {
  const ageGroups = [
    {
      id: "children",
      title: "เด็ก (2-12 ปี)",
      icon: Baby,
      description: "โภชนาการสำหรับการเจริญเติบโต",
      should: [
        "นม และผลิตภัณฑ์นม 2-3 แก้วต่อวัน",
        "ผักผลไม้หลากสี 5 ส่วนต่อวัน",
        "ข้าวและธัญพืช 4-6 ส่วนต่อวัน",
        "โปรตีน (เนื้อ ปลา ไข่) 2-3 ส่วนต่อวัน",
        "น้ำสะอาด 6-8 แก้วต่อวัน"
      ],
      shouldNot: [
        "ขนมหวานและน้ำตาลมากเกินไป",
        "อาหารทอดและไขมันอิ่มตัว",
        "เครื่องดื่มที่มีคาเฟอีน",
        "อาหารแปรรูปสูง",
        "น้ำอัดลมและเครื่องดื่มหวาน"
      ],
      tips: "เด็กต้องการแคลเซียมและโปรตีนสูงเพื่อการเจริญเติบโต",
    },
    {
      id: "teens",
      title: "วัยรุ่น (13-19 ปี)",
      icon: Users,
      description: "โภชนาการสำหรับวัยเปลี่ยนแปลง",
      should: [
        "โปรตีนเพิ่มขึ้น 3-4 ส่วนต่อวัน",
        "แคลเซียมสูง (นม ชีส โยเกิร์ต)",
        "ธาตุเหล็ก (เนื้อแดง ใส้ เลือด)",
        "ผักใบเขียวเข้ม",
        "ผลไม้วิตามิน C สูง"
      ],
      shouldNot: [
        "อาหารจานด่วนบ่อยเกินไป",
        "ขนมขบเคี้ยวมากเกินไป",
        "เครื่องดื่มให้พลังงานสูง",
        "การงดอาหารเพื่อลดน้ำหนัก",
        "น้ำตาลและเกลือมากเกินไป"
      ],
      tips: "วัยรุ่นหญิงต้องการธาตุเหล็กมากขึ้นเนื่องจากการมีประจำเดือน",
    },
    {
      id: "adults",
      title: "วัยผู้ใหญ่ (20-59 ปี)",
      icon: Heart,
      description: "โภชนาการสำหรับชีวิตทำงาน",
      should: [
        "อาหารหลัก 3 มื้อ อาหารว่าง 1-2 มื้อ",
        "ผักผลไม้ 5-9 ส่วนต่อวัน",
        "ธัญพืชเต็มเมล็ด",
        "โปรตีนจากพืชและสัตว์",
        "ไขมันดี (น้ำมันมะกอก ถั่ว)"
      ],
      shouldNot: [
        "อาหารมันเกลือหวานจัด",
        "เครื่องดื่มแอลกอฮอล์มากเกินไป",
        "การกินไม่ตรงเวลา",
        "อาหารทอดและขนมขบเคี้ยว",
        "การงดอาหารเป็นประจำ"
      ],
      tips: "เน้นความสมดุลและความหลากหลายของสารอาหาร",
    },
    {
      id: "elderly",
      title: "ผู้สูงอายุ (60+ ปี)",
      icon: Shield,
      description: "โภชนาการสำหรับชีวิตยืนยาว",
      should: [
        "โปรตีนคุณภาพสูง (ปลา ไข่)",
        "แคลเซียมและวิตามิน D",
        "ใยอาหารจากผักผลไม้",
        "น้ำเพียงพอ 8 แก้วต่อวัน",
        "วิตามิน B12 เสริม"
      ],
      shouldNot: [
        "เกลือมากเกินไป",
        "น้ำตาลแอดสูง",
        "อาหารแข็งเกินไป",
        "เครื่องดื่มแอลกอฮอล์",
        "การกินน้อยเกินไป"
      ],
      tips: "ต้องใส่ใจการดูดซึมสารอาหารที่ลดลงตามอายุ",
    },
  ];

  const healthConditions = [
    {
      id: "diabetes",
      title: "เบาหวาน",
      icon: Activity,
      color: "bg-red-50 border-red-200",
      should: [
        "ธัญพืชเต็มเมล็ด (ข้าวกล้อง ข้าวโอ๊ต)",
        "ผักใบเขียวและผักไฟเบอร์สูง",
        "โปรตีนไม่มีไขมัน (ปลา ไก่ไม่มีหนัง)",
        "ถั่วและเมล็ดพืช",
        "ผลไม้ดัชนีน้ำตาลต่ำ"
      ],
      shouldNot: [
        "น้ำตาลทราย น้ำเชื่อม น้ำผึ้ง",
        "ขนมหวาน เค้ก คุกกี้",
        "ข้าวขาว แป้งขาว",
        "เครื่องดื่มหวาน น้ำอัดลม",
        "ผลไม้หวานจัด (ทุเรียน ลำไย)"
      ],
      tips: "เน้นการควบคุมปริมาณและจังหวะการกิน",
    },
    {
      id: "hypertension", 
      title: "ความดันโลหิตสูง",
      icon: Heart,
      color: "bg-blue-50 border-blue-200",
      should: [
        "ผักผลไม้โปแตสเซียมสูง (กล้วย ส้ม)",
        "ธัญพืชเต็มเมล็ด",
        "ปลาไขมันดี (แซลมอน ทูน่า)",
        "นมและโยเกิร์ตไขมันต่ำ",
        "ถั่วและเมล็ดแมกนีเซียมสูง"
      ],
      shouldNot: [
        "เกลือและโซเดียมสูง",
        "อาหารแปรรูป ไส้กรอก แฮม",
        "อาหารกระป๋อง ผงปรุงรส",
        "เครื่องดื่มแอลกอฮอล์",
        "อาหารทอดและไขมันอิ่มตัว"
      ],
      tips: "เป้าหมายโซเดียมไม่เกิน 2,300 มก. ต่อวัน",
    },
    {
      id: "athletes",
      title: "นักกีฬา",
      icon: Brain,
      color: "bg-green-50 border-green-200",
      should: [
        "คาร์โบไฮเดรตซับซ้อน (ข้าวโอ๊ต มันฝรั่ง)",
        "โปรตีนสูง 1.2-2.0 กรัม/กก.น้ำหนัก",
        "น้ำเพียงพอก่อน-ระหว่าง-หลังออกกำลังกาย",
        "ผักผลไม้แอนติออกซิแดนต์สูง",
        "ไขมันดี (อะโวคาโด ถั่วอัลมอนด์)"
      ],
      shouldNot: [
        "อาหารไขมันสูงก่อนออกกำลังกาย",
        "เครื่องดื่มแอลกอฮอล์",
        "อาหารแปรรูปมากเกินไป",
        "น้ำตาลอย่างเดียวเป็นพลังงาน",
        "การงดน้ำในระหว่างออกกำลังกาย"
      ],
      tips: "ต้องการแคลอรี่และโปรตีนสูงกว่าคนทั่วไป",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          โภชนาการตามช่วงวัยและภาวะสุขภาพ
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          คำแนะนำการกินที่เหมาะสมสำหรับแต่ละช่วงวัยและสภาวะสุขภาพเฉพาะ
        </p>
      </div>

      <Tabs defaultValue="age" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="age">ตามช่วงวัย</TabsTrigger>
          <TabsTrigger value="health">ตามภาวะสุขภาพ</TabsTrigger>
        </TabsList>

        {/* Age Groups */}
        <TabsContent value="age" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ageGroups.map((group) => (
              <Card key={group.id} className="shadow-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <group.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{group.title}</CardTitle>
                      <CardDescription>{group.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Should Eat */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      ควรรับประทาน
                    </h4>
                    <ul className="space-y-2">
                      {group.should.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Should Not Eat */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      ไม่ควรรับประทาน
                    </h4>
                    <ul className="space-y-2">
                      {group.shouldNot.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="bg-gradient-hero rounded-lg p-4">
                    <p className="text-sm font-medium text-primary">💡 เทคนิค: {group.tips}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Health Conditions */}
        <TabsContent value="health" className="space-y-8">
          <div className="space-y-8">
            {healthConditions.map((condition) => (
              <Card key={condition.id} className={`shadow-card ${condition.color}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <condition.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800">{condition.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">คำแนะนำพิเศษ</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Should Eat */}
                    <div>
                      <h4 className="font-semibold text-green-700 mb-4 flex items-center text-lg">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        ควรรับประทาน
                      </h4>
                      <ul className="space-y-3">
                        {condition.should.map((item, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Should Not Eat */}
                    <div>
                      <h4 className="font-semibold text-red-700 mb-4 flex items-center text-lg">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        ไม่ควรรับประทาน
                      </h4>
                      <ul className="space-y-3">
                        {condition.shouldNot.map((item, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="mt-6 bg-white/80 rounded-lg p-4">
                    <p className="text-gray-800 font-medium">💡 เทคนิคสำคัญ: {condition.tips}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Information */}
      <div className="bg-gradient-hero rounded-2xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            หลักการสำคัญ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-lg p-6 text-center space-y-3">
              <Heart className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ความสมดุล</h3>
              <p className="text-sm text-gray-600">รับประทานอาหารครบ 5 หมู่ในสัดส่วนที่เหมาะสม</p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 text-center space-y-3">
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ความหลากหลาย</h3>
              <p className="text-sm text-gray-600">เลือกอาหารหลากหลายชนิดเพื่อได้สารอาหารครบถ้วน</p>
            </div>
            <div className="bg-white/80 rounded-lg p-6 text-center space-y-3">
              <Activity className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ความพอเหมาะ</h3>
              <p className="text-sm text-gray-600">ปริมาณที่เหมาะสมกับความต้องการของร่างกาย</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Shield className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-800 mb-2">ข้อควรระวัง</h3>
            <p className="text-yellow-700 text-sm leading-relaxed">
              คำแนะนำในหน้านี้เป็นแนวทางทั่วไป ไม่ควรใช้แทนคำแนะนำจากแพทย์ นักโภชนาการ 
              หรือผู้เชี่ยวชาญด้านสุขภาพ หากมีภาวะสุขภาพเฉพาะ ควรปรึกษาผู้เชี่ยวชาญก่อนปรับเปลี่ยนอาหารการกิน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide;