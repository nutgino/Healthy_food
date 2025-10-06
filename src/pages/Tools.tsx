import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Activity, Scale, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "BMI Calculator",
      description: "คำนวณดัชนีมวลกาย (Body Mass Index) เพื่อทราบสถานะน้ำหนักของคุณ",
      features: ["คำนวณ BMI อย่างแม่นยำ", "แปลผลตามเกณฑ์มาตรฐาน", "คำแนะนำสำหรับแต่ละช่วง"],
      link: "/bmi-bmr",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: TrendingUp,
      title: "BMR Calculator", 
      description: "คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน (Basal Metabolic Rate)",
      features: ["คำนวณ BMR ตามสูตร Harris-Benedict", "ประเมินพลังงานที่ใช้ขณะพัก", "วางแผนการกินตามเป้าหมาย"],
      link: "/bmi-bmr", 
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Activity,
      title: "Activity Calories",
      description: "คำนวณแคลอรี่ที่เผาผลาญจากกิจกรรมและการออกกำลังกายต่างๆ",
      features: ["เลือกจากกิจกรรมมากกว่า 50 รายการ", "คำนวณตามน้ำหนักและระยะเวลา", "วางแผนการออกกำลังกาย"],
      link: "/activity-calories",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100", 
      buttonColor: "bg-orange-600 hover:bg-orange-700",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          เครื่องมือคำนวณสุขภาพ
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          เครื่องมือที่จำเป็นสำหรับการดูแลสุขภาพ วางแผนการกิน และการออกกำลังกาย
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card key={tool.title} className={`${tool.color} transition-all duration-300 shadow-card hover:shadow-lg border-2`}>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <tool.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-800">{tool.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-600 leading-relaxed">
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-3">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full ${tool.buttonColor} text-white`}
              >
                <Link to={tool.link}>
                  เริ่มใช้เครื่องมือ
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      

      {/* Tips Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-muted rounded-xl p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">ความแม่นยำ</h3>
          <p className="text-muted-foreground text-sm">
            เครื่องมือทั้งหมดใช้สูตรคำนวณที่ได้รับการยอมรับจากองค์กรสุขภาพนานาชาติ
          </p>
        </div>

        <div className="bg-muted rounded-xl p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">เป้าหมายที่ชัดเจน</h3>
          <p className="text-muted-foreground text-sm">
            แต่ละเครื่องมือให้คำแนะนำและเป้าหมายที่เฉพาะเจาะจงสำหรับสุขภาพของคุณ
          </p>
        </div>

        <div className="bg-muted rounded-xl p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">ใช้งานง่าย</h3>
          <p className="text-muted-foreground text-sm">
            อินเทอร์เฟซที่เรียบง่าย เข้าใจได้ง่าย และให้ผลลัพธ์ที่ชัดเจน
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;