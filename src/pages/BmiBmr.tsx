import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BmiBmr = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [results, setResults] = useState<{
    bmi: number;
    bmiCategory: string;
    bmr: number;
    dailyCalories: number;
  } | null>(null);

  const activityLevels = [
    { value: "1.2", label: "นั่งทำงาน ไม่ออกกำลังกาย" },
    { value: "1.375", label: "ออกกำลังกายเบาๆ 1-3 วัน/สัปดาห์" },
    { value: "1.55", label: "ออกกำลังกายปานกลาง 3-5 วัน/สัปดาห์" },
    { value: "1.725", label: "ออกกำลังกายหนัก 6-7 วัน/สัปดาห์" },
    { value: "1.9", label: "ออกกำลังกายหนักมาก หรือทำงานกายภาพ" },
  ];

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "น้ำหนักต่ำกว่าเกณฑ์", color: "bg-blue-100 text-blue-800" };
    if (bmi < 25) return { category: "น้ำหนักปกติ", color: "bg-green-100 text-green-800" };
    if (bmi < 30) return { category: "น้ำหนักเกิน", color: "bg-yellow-100 text-yellow-800" };
    return { category: "อ้วน", color: "bg-red-100 text-red-800" };
  };

  const calculateBmi = () => {
    if (!height || !weight) return;
    
    const heightM = parseFloat(height) / 100;
    const weightKg = parseFloat(weight);
    const bmi = weightKg / (heightM * heightM);
    
    return bmi;
  };

  const calculateBmr = () => {
    if (!height || !weight || !age || !gender) return;

    const heightCm = parseFloat(height);
    const weightKg = parseFloat(weight);
    const ageYears = parseInt(age);

    let bmr: number;
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageYears);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageYears);
    }

    return bmr;
  };

  const handleCalculate = () => {
    const bmi = calculateBmi();
    const bmr = calculateBmr();
    
    if (bmi && bmr && activityLevel) {
      const dailyCalories = bmr * parseFloat(activityLevel);
      const bmiCategory = getBmiCategory(bmi).category;
      
      setResults({
        bmi: Math.round(bmi * 10) / 10,
        bmiCategory,
        bmr: Math.round(bmr),
        dailyCalories: Math.round(dailyCalories),
      });
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setGender("");
    setActivityLevel("");
    setResults(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          เครื่องคำนวณ BMI & BMR
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          คำนวณดัชนีมวลกาย (BMI) และอัตราการเผาผลาญพลังงานขั้นพื้นฐาน (BMR)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-primary" />
              <span>กรอกข้อมูลส่วนตัว</span>
            </CardTitle>
            <CardDescription>
              กรุณากรอกข้อมูลที่ถูกต้องเพื่อให้ได้ผลการคำนวณที่แม่นยำ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">ส่วนสูง (ซม.)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">น้ำหนัก (กก.)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">อายุ (ปี)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>เพศ</Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกเพศ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">ชาย</SelectItem>
                    <SelectItem value="female">หญิง</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>ระดับกิจกรรมประจำวัน</Label>
              <Select value={activityLevel} onValueChange={setActivityLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกระดับกิจกรรม" />
                </SelectTrigger>
                <SelectContent>
                  {activityLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button onClick={handleCalculate} className="flex-1">
                <TrendingUp className="h-4 w-4 mr-2" />
                คำนวณ
              </Button>
              <Button variant="outline" onClick={resetForm}>
                ล้างข้อมูล
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>ผลการคำนวณ</span>
            </CardTitle>
            <CardDescription>
              ผลลัพธ์จะแสดงเมื่อกรอกข้อมูลครบถ้วนและกดคำนวณ
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-6">
                {/* BMI Result */}
                <div className="bg-gradient-hero rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">ดัชนีมวลกาย (BMI)</h3>
                    <Badge className={getBmiCategory(results.bmi).color}>
                      {results.bmiCategory}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">{results.bmi}</div>
                  <p className="text-muted-foreground text-sm">
                    BMI อยู่ในช่วง {results.bmiCategory}
                  </p>
                </div>

                {/* BMR Result */}
                <div className="bg-gradient-hero rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">อัตราการเผาผลาญพลังงานขั้นพื้นฐาน (BMR)</h3>
                  <div className="text-3xl font-bold text-primary">{results.bmr}</div>
                  <p className="text-muted-foreground text-sm">แคลอรี่ต่อวัน (ขณะพัก)</p>
                </div>

                {/* Daily Calories */}
                <div className="bg-gradient-hero rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">ความต้องการแคลอรี่ต่อวัน</h3>
                  <div className="text-3xl font-bold text-primary">{results.dailyCalories}</div>
                  <p className="text-muted-foreground text-sm">แคลอรี่ต่อวัน (รวมกิจกรรม)</p>
                </div>

                {/* Recommendations */}
                <div className="border-t pt-4 space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Info className="h-4 w-4 mr-2 text-primary" />
                    คำแนะนำ
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• รักษาน้ำหนัก: รับประทาน {results.dailyCalories} แคลอรี่ต่อวัน</p>
                    <p>• ลดน้ำหนัก: รับประทาน {results.dailyCalories - 500} แคลอรี่ต่อวัน</p>
                    <p>• เพิ่มน้ำหนัก: รับประทาน {results.dailyCalories + 500} แคลอรี่ต่อวัน</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>กรอกข้อมูลครบถ้วนแล้วกดคำนวณเพื่อดูผลลัพธ์</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">BMI คืออะไร?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              ดัชนีมวลกาย (Body Mass Index) เป็นตัวเลขที่ใช้ประเมินสถานะน้ำหนักเมื่อเทียบกับส่วนสูง
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>ต่ำกว่าเกณฑ์:</span>
                <Badge className="bg-blue-100 text-blue-800">&lt; 18.5</Badge>
              </div>
              <div className="flex justify-between">
                <span>ปกติ:</span>
                <Badge className="bg-green-100 text-green-800">18.5-24.9</Badge>
              </div>
              <div className="flex justify-between">
                <span>น้ำหนักเกิน:</span>
                <Badge className="bg-yellow-100 text-yellow-800">25-29.9</Badge>
              </div>
              <div className="flex justify-between">
                <Badge className="bg-red-100 text-red-800">&ge; 30</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-primary">BMR คืออะไร?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              อัตราการเผาผลาญพลังงานขั้นพื้นฐาน คือจำนวนแคลอรี่ที่ร่างกายใช้ในการทำงานขั้นพื้นฐาน เช่น การหายใจ การหมุนเวียนโลหิต
            </p>
            <p className="text-muted-foreground text-sm">
              BMR จะใช้สูตร Harris-Benedict ที่ได้รับการยอมรับอย่างแพร่หลาย และจะคำนวณรวมกับระดับกิจกรรมเพื่อให้ได้ความต้องการแคลอรี่ต่อวันที่แม่นยำ
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BmiBmr;