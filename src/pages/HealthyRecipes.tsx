import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

const HealthyRecipes = () => {
  const recipes = [
    {
      name: "สลัดอะโวคาโดคินวา",
      image: "🥗",
      calories: 320,
      prepTime: "15 นาที",
      serves: "2 คน",
      difficulty: "ง่าย",
      category: "มื้อเที่ยง",
      ingredients: ["อะโวคาโด 1 ลูก", "คินวา 1/2 ถ้วย", "มะเขือเทศ 2 ลูก", "แตงกวา 1/2 ลูก"],
      color: "bg-green-50 border-green-200",
    },
    {
      name: "ข้าวโอ๊ตบลูเบอร์รี่",
      image: "🥣",
      calories: 280,
      prepTime: "10 นาที", 
      serves: "1 คน",
      difficulty: "ง่ายมาก",
      category: "มื้อเช้า",
      ingredients: ["ข้าวโอ๊ต 1/2 ถ้วย", "บลูเบอร์รี่ 1/4 ถ้วย", "นม 1 ถ้วย", "น้ำผึ้ง 1 ช้อนชา"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      name: "แซลมอนย่างผักรวม",
      image: "🐟",
      calories: 450,
      prepTime: "25 นาที",
      serves: "2 คน", 
      difficulty: "ปานกลาง",
      category: "มื้อเย็น",
      ingredients: ["แซลมอน 200g", "บรอกโคลี่ 1 ถ้วย", "แครอท 1 หัว", "น้ำมันมะกอก 2 ช้อนโต๊ะ"],
      color: "bg-pink-50 border-pink-200",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">เมนูอาหารสุขภาพ</h1>
        <p className="text-xl text-muted-foreground">สูตรอาหารง่ายๆ ที่อร่อยและดีต่อสุขภาพ</p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <Card key={index} className={`${recipe.color} hover:shadow-card transition-all duration-300`}>
            <CardHeader>
              <div className="text-center space-y-2">
                <div className="text-4xl">{recipe.image}</div>
                <CardTitle className="text-xl text-gray-800">{recipe.name}</CardTitle>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">{recipe.category}</Badge>
                  <Badge className="bg-primary text-primary-foreground">{recipe.calories} cal</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Recipe Info */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="space-y-1">
                  <Clock className="h-4 w-4 text-primary mx-auto" />
                  <div className="text-xs text-gray-600">{recipe.prepTime}</div>
                </div>
                <div className="space-y-1">
                  <Users className="h-4 w-4 text-primary mx-auto" />
                  <div className="text-xs text-gray-600">{recipe.serves}</div>
                </div>
                <div className="space-y-1">
                  <ChefHat className="h-4 w-4 text-primary mx-auto" />
                  <div className="text-xs text-gray-600">{recipe.difficulty}</div>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">วัตถุดิบหลัก:</h4>
                <ul className="space-y-1">
                  {recipe.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">เร็วๆ นี้</h2>
        <p className="text-muted-foreground">เมนูและสูตรอาหารเพิ่มเติมกำลังจะมาอัปเดต</p>
      </div>
    </div>
  );
};

export default HealthyRecipes;