import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Heart, Brain, Eye, Zap } from "lucide-react";

const HealthyFoods = () => {
  const healthyFoods = [
    {
      name: "อะโวคาโด",
      image: "🥑",
      description: "อุดมไปด้วยไขมันดี วิตามิน K, E และใยอาหาร",
      nutrients: ["ไขมันดี", "วิตามิน K", "โฟเลต", "โปแตสเซียม"],
      benefits: ["ลดคอเลสเตอรอล", "ดีต่อหัวใจ", "ช่วยการดูดซึมวิตามิน"],
      color: "bg-green-50 border-green-200",
      icon: Heart,
    },
    {
      name: "แซลมอน",
      image: "🐟",
      description: "ปลาน้ำเย็นที่อุดมด้วย Omega-3 และโปรตีนคุณภาพสูง",
      nutrients: ["โอเมก้า-3", "โปรตีน", "วิตามิน D", "วิตามิน B12"],
      benefits: ["ดีต่อสมอง", "ลดการอักเสบ", "เสริมภูมิคุ้มกัน"],
      color: "bg-blue-50 border-blue-200",
      icon: Brain,
    },
    {
      name: "บลูเบอร์รี่",
      image: "🫐",
      description: "ผลไม้ที่อุดมด้วยแอนโทไซยานิน ต้านอนุมูลอิสระสูง",
      nutrients: ["แอนโทไซยานิน", "วิตามิน C", "วิตามิน K", "ใยอาหาร"],
      benefits: ["ต้านออกซิเดชัน", "ดีต่อความจำ", "ช่วยการมองเห็น"],
      color: "bg-purple-50 border-purple-200",
      icon: Eye,
    },
    {
      name: "ผักโขมหนาม",
      image: "🥬",
      description: "ผักใบเขียวเข้มที่อุดมด้วยธาตุเหล็กและวิตามินหลากหลาย",
      nutrients: ["ธาตุเหล็ก", "วิตามิน K", "โฟเลต", "แมกนีเซียม"],
      benefits: ["ป้องกันโลหิตจาง", "เสริมกระดูก", "ดีต่อการมองเห็น"],
      color: "bg-green-50 border-green-200",
      icon: Shield,
    },
    {
      name: "ถั่วอัลมอนด์",
      image: "🥜",
      description: "ถั่วแห้งที่อุดมด้วยไขมันดี วิตามิน E และแมกนีเซียม",
      nutrients: ["วิตามิน E", "แมกนีเซียม", "ไขมันดี", "โปรตีน"],
      benefits: ["ดีต่อผิว", "ลดความเสี่ยงโรคหัวใจ", "ช่วยควบคุมน้ำตาล"],
      color: "bg-amber-50 border-amber-200",
      icon: Heart,
    },
    {
      name: "ข้าวโอ๊ต",
      image: "🥣",
      description: "ธัญพืชเต็มเมล็ดที่อุดมด้วยใยอาหารชนิดละลายน้ำได้",
      nutrients: ["ใยอาหาร", "เบต้า-กลูแคน", "โปรตีน", "แมงกานีส"],
      benefits: ["ลดคอเลสเตอรอล", "ควบคุมน้ำตาล", "อิ่มท้องนาน"],
      color: "bg-orange-50 border-orange-200",
      icon: Zap,
    },
    {
      name: "โยเกิร์ตกรีก",
      image: "🥛",
      description: "นมเปรียวที่อุดมด้วยโปรตีนและโปรไบโอติก",
      nutrients: ["โปรตีน", "โปรไบโอติก", "แคลเซียม", "วิตามิน B12"],
      benefits: ["ดีต่อระบบย่อย", "เสริมกระดูก", "สร้างกล้ามเนื้อ"],
      color: "bg-blue-50 border-blue-200",
      icon: Shield,
    },
    {
      name: "กีวี่",
      image: "🥝",
      description: "ผลไม้ที่มีวิตามิน C สูงกว่าส้ม และเอนไซม์ย่อยอาหาร",
      nutrients: ["วิตามิน C", "วิตามิน K", "เอนไซม์", "โปแตสเซียม"],
      benefits: ["เสริมภูมิคุ้มกัน", "ช่วยย่อยอาหาร", "ดีต่อผิว"],
      color: "bg-green-50 border-green-200",
      icon: Leaf,
    },
    {
      name: "ไข่",
      image: "🥚",
      description: "โปรตีนสมบูรณ์ที่มีกรดอะมิโนครบทั้ง 9 ชนิด",
      nutrients: ["โปรตีน", "โคลีน", "ลูทีน", "วิตามิน D"],
      benefits: ["สร้างกล้ามเนื้อ", "ดีต่อสมอง", "ช่วยการมองเห็น"],
      color: "bg-yellow-50 border-yellow-200", 
      icon: Zap,
    },
    {
      name: "บรอกโคลี่",
      image: "🥦",
      description: "ผักตระกูลกะหล่ำที่อุดมด้วยวิตามิน C และสารซัลโฟราเฟน",
      nutrients: ["วิตามิน C", "วิตามิน K", "ซัลโฟราเฟน", "โฟเลต"],
      benefits: ["ต้านมะเร็ง", "ดีต่อตับ", "เสริมภูมิคุ้มกัน"],
      color: "bg-green-50 border-green-200",
      icon: Shield,
    },
    {
      name: "เผือก",
      image: "🍠",
      description: "หัวผักที่อุดมด้วยเบต้าแคโรทีน และใยอาหาร",
      nutrients: ["เบต้าแคโรทีน", "วิตามิน A", "โปแตสเซียม", "ใยอาหาร"],
      benefits: ["ดีต่อสายตา", "เสริมภูมิคุ้มกัน", "ช่วยย่อยอาหาร"],
      color: "bg-orange-50 border-orange-200",
      icon: Eye,
    },
    {
      name: "ผักกาดขาว",
      image: "🥬",
      description: "ผักใบเขียวที่อุดมด้วยวิตามิน K และแคลเซียม",
      nutrients: ["วิตามิน K", "แคลเซียม", "วิตามิน A", "โฟเลต"],
      benefits: ["เสริมกระดูก", "ป้องกันโลหิตจาง", "ดีต่อหัวใจ"],
      color: "bg-green-50 border-green-200",
      icon: Shield,
    },
    {
      name: "ทูน่า",
      image: "🐟",
      description: "ปลาที่อุดมด้วยโปรตีนและโอเมก้า-3 แต่ไขมันต่ำ",
      nutrients: ["โปรตีน", "โอเมก้า-3", "วิตามิน D", "ซีลีเนียม"],
      benefits: ["สร้างกล้ามเนื้อ", "ดีต่อสมอง", "ลดการอักเสบ"],
      color: "bg-blue-50 border-blue-200",
      icon: Brain,
    },
    {
      name: "ถั่วดำ",
      image: "🫘",
      description: "ถั่วแห้งที่อุดมด้วยโปรตีน ใยอาหาร และแอนโทไซยานิน",
      nutrients: ["โปรตีน", "ใยอาหาร", "แอนโทไซยานิน", "โฟเลต"],
      benefits: ["ควบคุมน้ำตาล", "ดีต่อหัวใจ", "ต้านอนุมูลอิสระ"],
      color: "bg-gray-50 border-gray-200",
      icon: Heart,
    },
    {
      name: "มะเขือเทศ",
      image: "🍅",
      description: "ผลไม้ที่อุดมด้วยไลโคปีน สารต้านอนุมูลอิสระที่ทรงพลัง",
      nutrients: ["ไลโคปีน", "วิตามิน C", "โปแตสเซียม", "วิตามิน K"],
      benefits: ["ดีต่อต่อมลูกหมาก", "ป้องกันโรคหัวใจ", "ดีต่อผิว"],
      color: "bg-red-50 border-red-200",
      icon: Shield,
    },
    {
      name: "งาดำ",
      image: "🥜",
      description: "เมล็ดขนาดเล็กที่อุดมไปด้วยแคลเซียม แมกนีเซียม และลิกนาน",
      nutrients: ["แคลเซียม", "แมกนีเซียม", "ลิกนาน", "ไขมันดี"],
      benefits: ["เสริมกระดูก", "ดีต่อหัวใจ", "ช่วยการนอนหลับ"],
      color: "bg-gray-50 border-gray-200",
      icon: Shield,
    },
    {
      name: "กระเทียม",
      image: "🧄",
      description: "เครื่องเทศที่มีสารอัลลิซิน ช่วยเสริมภูมิคุ้มกันและลดการอักเสบ",
      nutrients: ["อัลลิซิน", "แมงกานีส", "วิตามิน B6", "วิตามิน C"],
      benefits: ["เสริมภูมิคุ้มกัน", "ลดความดัน", "ต้านเชื้อโรค"],
      color: "bg-purple-50 border-purple-200",
      icon: Shield,
    },
    {
      name: "ชา่เขียว",
      image: "🍵",
      description: "เครื่องดื่มที่อุดมด้วยแคทีชิน และ EGCG ต้านอนุมูลอิสระ",
      nutrients: ["แคทีชิน", "EGCG", "L-theanine", "แคฟฟีอีน"],
      benefits: ["เร่งการเผาผลาญ", "ดีต่อสมอง", "ต้านมะเร็ง"],
      color: "bg-green-50 border-green-200",
      icon: Brain,
    },
    {
      name: "ขิง",
      image: "🫚",
      description: "รากพืชที่มีสารจินเจอรอล ช่วยลดการอักเสบและคลื่นไส้",
      nutrients: ["จินเจอรอล", "แมงกานีส", "แมกนีเซียม", "วิตามิน C"],
      benefits: ["ลดการอักเสบ", "ช่วยย่อยอาหาร", "ลดคลื่นไส้"],
      color: "bg-yellow-50 border-yellow-200",
      icon: Leaf,
    },
    {
      name: "ฟักทอง",
      image: "🎃",
      description: "ผักผลที่อุดมด้วยเบต้าแคโรทีนและวิตามิน A สูง",
      nutrients: ["เบต้าแคโรทีน", "วิตามิน A", "โปแตสเซียม", "ใยอาหาร"],
      benefits: ["ดีต่อสายตา", "เสริมภูมิคุ้มกัน", "ดีต่อผิว"],
      color: "bg-orange-50 border-orange-200",
      icon: Eye,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          อาหารสุขภาพ 20 อย่าง
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          รู้จักกับอาหารที่ดีต่อสุขภาพ พร้อมสารอาหารและประโยชน์ที่เหมาะสำหรับการดูแลตนเอง
        </p>
      </div>

      {/* Foods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {healthyFoods.map((food, index) => (
          <Card key={index} className={`${food.color} hover:shadow-card transition-all duration-300 shadow-sm`}>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{food.image}</div>
                <div>
                  <CardTitle className="text-lg text-gray-800">{food.name}</CardTitle>
                  <div className="flex items-center mt-1">
                    <food.icon className="h-4 w-4 text-primary mr-1" />
                    <span className="text-xs text-primary font-medium">Super Food</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {food.description}
              </p>
              
              {/* Nutrients */}
              <div>
                <h4 className="font-medium text-gray-800 text-sm mb-2">สารอาหารเด่น:</h4>
                <div className="flex flex-wrap gap-1 ">
                  {food.nutrients.map((nutrient, idx) => (
                    <Badge key={idx} variant="secondary" className=" bg-blue-200 text-gray-800">
                      {nutrient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-medium text-gray-800 text-sm mb-2">ประโยชน์:</h4>
                <ul className="space-y-1">
                  {food.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories Section */}
      <div className="bg-gradient-hero rounded-2xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            หมวดหมู่อาหารสุขภาพ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-2">
              <Brain className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ดีต่อสมอง</h3>
              <p className="text-xs text-gray-600">แซลมอน, บลูเบอร์รี่, ไข่</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-2">
              <Heart className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ดีต่อหัวใจ</h3>
              <p className="text-xs text-gray-600">อะโวคาโด, ข้าวโอ๊ต, ถั่วอัลมอนด์</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-2">
              <Shield className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">เสริมภูมิคุ้มกัน</h3>
              <p className="text-xs text-gray-600">บรอกโคลี่, กระเทียม, กีวี่</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-2">
              <Eye className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ดีต่อสายตา</h3>
              <p className="text-xs text-gray-600">เผือก, ฟักทอง, ไข่</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              การเลือกซื้อ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• เลือกผักผลไม้สดใหม่ มีสีสันสดใส</li>
              <li>• หลีกเลี่ยงอาหารแปรรูปมากเกินไป</li>
              <li>• อ่านฉลากโภชนาการก่อนซื้อ</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              การเก็บรักษา
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• เก็บผักใบเขียวในตู้เย็น</li>
              <li>• ผลไม้บางชนิดทิ้งไว้ที่อุณหภูมิห้อง</li>
              <li>• ล้างทำความสะอาดก่อนรับประทาน</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              การปรุงอาหาร
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• นึ่ง ต้ม ย่าง ดีกว่าทอด</li>
              <li>• ใส่น้ำมันน้อย เน้นรสชาติธรรมชาติ</li>
              <li>• ปรุงให้สุกพอดี เพื่อรักษาสารอาหาร</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthyFoods;