import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Zap, Droplet, Shield, Apple } from "lucide-react";
import { useState } from "react";

const FoodData = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const foodData = [
    {
      name: "ข้าวสวย",
      category: "ธัญพืช",
      calories: 130,
      protein: 2.7,
      carbs: 28.1,
      fat: 0.3,
      fiber: 0.4,
      serving: "1 ทัพพี (100g)",
      benefits: ["ให้พลังงาน", "ย่อยง่าย"],
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      name: "ข้าวกล้อง",
      category: "ธัญพืช",
      calories: 111,
      protein: 2.6,
      carbs: 22.9,
      fat: 0.9,
      fiber: 1.8,
      serving: "1 ทัพพี (100g)",
      benefits: ["ใยอาหารสูง", "วิตามิน B"],
      color: "bg-amber-50 border-amber-200",
    },
    {
      name: "ไก่ต้ม (เนื้อ)",
      category: "โปรตีน",
      calories: 165,
      protein: 31.0,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      serving: "100g",
      benefits: ["โปรตีนสูง", "ไขมันต่ำ"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "ปลาทูน่า (น้ำ)",
      category: "โปรตีน",
      calories: 116,
      protein: 25.5,
      carbs: 0,
      fat: 0.8,
      fiber: 0,
      serving: "100g",
      benefits: ["โปรตีนสูง", "โอเมก้า-3"],
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      name: "ไข่ไก่ต้ม",
      category: "โปรตีน",
      calories: 155,
      protein: 12.6,
      carbs: 1.1,
      fat: 10.6,
      fiber: 0,
      serving: "1 ฟอง (50g)",
      benefits: ["โปรตีนสมบูรณ์", "วิตามิน D"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "กล้วยหอม",
      category: "ผลไม้",
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fat: 0.3,
      fiber: 2.6,
      serving: "1 ผล (118g)",
      benefits: ["โปแตสเซียม", "วิตามิน C"],
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      name: "ส้มโอ",
      category: "ผลไม้",
      calories: 42,
      protein: 0.8,
      carbs: 10.7,
      fat: 0.1,
      fiber: 1.6,
      serving: "100g",
      benefits: ["วิตามิน C สูง", "ใยอาหาร"],
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "แอปเปิ้ล",
      category: "ผลไม้", 
      calories: 52,
      protein: 0.3,
      carbs: 13.8,
      fat: 0.2,
      fiber: 2.4,
      serving: "1 ผล (182g)",
      benefits: ["ใยอาหาร", "แอนติออกซิแดนต์"],
      color: "bg-red-50 border-red-200",
    },
    {
      name: "บรอกโคลี่",
      category: "ผัก",
      calories: 34,
      protein: 2.8,
      carbs: 6.6,
      fat: 0.4,
      fiber: 2.6,
      serving: "100g",
      benefits: ["วิตามิน C", "ซัลโฟราเฟน"],
      color: "bg-green-50 border-green-200",
    },
    {
      name: "ผักโขมหนาม",
      category: "ผัก",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      serving: "100g",
      benefits: ["ธาตุเหล็ก", "วิตามิน K"],
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      name: "แครอท",
      category: "ผัก",
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fat: 0.2,
      fiber: 2.8,
      serving: "100g",
      benefits: ["เบต้าแคโรทีน", "วิตามิน A"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "นมสดไขมัน 2%",
      category: "นม",
      calories: 50,
      protein: 3.3,
      carbs: 4.7,
      fat: 2.0,
      fiber: 0,
      serving: "100ml",
      benefits: ["แคลเซียม", "วิตามิน D"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "โยเกิร์ตธรรมชาติ",
      category: "นม",
      calories: 59,
      protein: 10.0,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      serving: "100g",
      benefits: ["โปรไบโอติก", "โปรตีน"],
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      name: "ถั่วเลนทิล",
      category: "ถั่ว",
      calories: 116,
      protein: 9.0,
      carbs: 20.1,
      fat: 0.4,
      fiber: 7.9,
      serving: "100g (ต้ม)",
      benefits: ["โปรตีนพืช", "ใยอาหารสูง"],
      color: "bg-brown-50 border-brown-200",
    },
    {
      name: "ถั่วอัลมอนด์",
      category: "ถั่วแห้ง",
      calories: 579,
      protein: 21.1,
      carbs: 21.6,
      fat: 49.9,
      fiber: 12.5,
      serving: "100g",
      benefits: ["วิตามิน E", "แมกนีเซียม"],
      color: "bg-amber-50 border-amber-200",
    },
    {
      name: "ข้าวโอ๊ต",
      category: "ธัญพืช",
      calories: 68,
      protein: 2.4,
      carbs: 12.0,
      fat: 1.4,
      fiber: 1.7,
      serving: "100g (ต้ม)",
      benefits: ["เบต้า-กลูแคน", "ใยอาหาร"],
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      name: "แซลมอน",
      category: "โปรตีน",
      calories: 208,
      protein: 25.4,
      carbs: 0,
      fat: 12.4,
      fiber: 0,
      serving: "100g",
      benefits: ["โอเมก้า-3", "วิตามิน D"],
      color: "bg-pink-50 border-pink-200",
    },
    {
      name: "อะโวคาโด",
      category: "ผลไม้",
      calories: 160,
      protein: 2.0,
      carbs: 8.5,
      fat: 14.7,
      fiber: 6.7,
      serving: "100g",
      benefits: ["ไขมันดี", "โปแตสเซียม"],
      color: "bg-green-50 border-green-200",
    },
    {
      name: "เผือก",
      category: "ผัก",
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fat: 0.1,
      fiber: 3.0,
      serving: "100g",
      benefits: ["เบต้าแคโรทีน", "วิตามิน A"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "งาดำ",
      category: "ถั่วแห้ง",
      calories: 573,
      protein: 17.7,
      carbs: 23.4,
      fat: 49.7,
      fiber: 11.8,
      serving: "100g",
      benefits: ["แคลเซียม", "ลิกนาน"],
      color: "bg-gray-50 border-gray-200",
    },
  ];

  const filteredFood = foodData.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(foodData.map(food => food.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          ฐานข้อมูลอาหาร
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ค้นหาข้อมูลโภชนาการของอาหารต่างๆ พร้อมคำนวณแคลอรี่และสารอาหาร
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="ค้นหาอาหาร เช่น ข้าว, ไก่, ผลไม้..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2">
        <Badge
          variant={searchTerm === "" ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => setSearchTerm("")}
        >
          ทั้งหมด
        </Badge>
        {categories.map(category => (
          <Badge
            key={category}
            variant={searchTerm === category ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setSearchTerm(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFood.map((food, index) => (
          <Card key={index} className={`${food.color} hover:shadow-card transition-all duration-300 shadow-sm`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg text-gray-800">{food.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {food.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{food.calories}</div>
                  <div className="text-xs text-muted-foreground">แคลอรี่</div>
                </div>
              </div>
              <CardDescription className="text-xs text-gray-600">
                {food.serving}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Macronutrients */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Shield className="h-4 w-4 text-blue-600 mr-1" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">{food.protein}g</div>
                  <div className="text-xs text-gray-600">โปรตีน</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Zap className="h-4 w-4 text-yellow-600 mr-1" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">{food.carbs}g</div>
                  <div className="text-xs text-gray-600">คาร์บ</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Droplet className="h-4 w-4 text-green-600 mr-1" />
                  </div>
                  <div className="text-sm font-medium text-gray-800">{food.fat}g</div>
                  <div className="text-xs text-gray-600">ไขมัน</div>
                </div>
              </div>

              {/* Fiber */}
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-2">
                <div className="flex items-center">
                  <Apple className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-700">ใยอาหาร</span>
                </div>
                <span className="text-sm font-medium text-gray-800">{food.fiber}g</span>
              </div>

              {/* Benefits */}
              <div>
                <div className="text-xs text-gray-600 mb-2">ประโยชน์เด่น:</div>
                <div className="flex flex-wrap gap-1">
                  {food.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs bg-white/80">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredFood.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>ไม่พบอาหารที่ค้นหา ลองเปลี่ยนคำค้นหาใหม่</p>
        </div>
      )}

      {/* Nutrition Facts Guide */}
      <div className="bg-gradient-hero rounded-2xl p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            คู่มือการอ่านข้อมูลโภชนาการ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-3">
              <Zap className="h-8 w-8 text-yellow-600 mx-auto" />
              <h3 className="font-semibold text-gray-800">แคลอรี่</h3>
              <p className="text-xs text-gray-600">พลังงานที่ได้จากอาหาร 1 กรัมคาร์บ = 4 กิโลแคลอรี่</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-3">
              <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              <h3 className="font-semibold text-gray-800">โปรตีน</h3>
              <p className="text-xs text-gray-600">สร้างและซ่อมแซมเนื้อเยื่อ 1 กรัม = 4 กิโลแคลอรี่</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-3">
              <Droplet className="h-8 w-8 text-green-600 mx-auto" />
              <h3 className="font-semibold text-gray-800">ไขมัน</h3>
              <p className="text-xs text-gray-600">พลังงานเข้มข้น 1 กรัม = 9 กิโลแคลอรี่</p>
            </div>
            <div className="bg-white/80 rounded-lg p-4 text-center space-y-3">
              <Apple className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-gray-800">ใยอาหาร</h3>
              <p className="text-xs text-gray-600">ช่วยการย่อย ควรได้ 25-35 กรัม/วัน</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-card text-center">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-center">
              <Search className="h-5 w-5 mr-2" />
              การใช้ข้อมูล
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              ข้อมูลแสดงต่อ 100 กรัม หรือหน่วยที่ระบุ 
              สามารถคำนวณตามปริมาณที่รับประทานจริง
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-center">
              <Zap className="h-5 w-5 mr-2" />
              การวางแผน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              ใช้ข้อมูลในการวางแผนอาหารให้ตรงกับเป้าหมายแคลอรี่
              และสารอาหารประจำวัน
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card text-center">
          <CardHeader>
            <CardTitle className="text-primary flex items-center justify-center">
              <Apple className="h-5 w-5 mr-2" />
              การเปรียบเทียบ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              เปรียบเทียบอาหารชนิดต่างๆ เพื่อเลือก
              อาหารที่ให้สารอาหารคุ้มค่าที่สุด
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FoodData;