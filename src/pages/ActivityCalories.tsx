import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Flame, Clock, Timer } from "lucide-react";

const ActivityCalories = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const activities = [
    { name: "เดินเล่น", met: 3.5 },
    { name: "เดินเร็ว", met: 4.3 },
    { name: "วิ่งเหยาะ", met: 7.0 },
    { name: "วิ่ง 8 กม./ชม.", met: 8.3 },
    { name: "วิ่ง 10 กม./ชม.", met: 9.8 },
    { name: "ปั่นจักรยานเล่น", met: 4.0 },
    { name: "ปั่นจักรยานเร็ว", met: 8.0 },
    { name: "ว่ายน้ำเล่น", met: 6.0 },
    { name: "ว่ายน้ำแข่ง", met: 10.0 },
    { name: "โยคะ", met: 2.5 },
    { name: "พิลาทิส", met: 3.0 },
    { name: "แอโรบิก", met: 7.3 },
    { name: "เต้นรำ", met: 4.8 },
    { name: "เทนนิส", met: 7.3 },
    { name: "แบดมินตัน", met: 5.5 },
    { name: "ฟุตบอล", met: 7.0 },
    { name: "บาสเกตบอล", met: 6.5 },
    { name: "วอลเลย์บอล", met: 4.0 },
    { name: "เล่นโบว์ลิ่ง", met: 3.0 },
    { name: "กอล์ฟ", met: 4.8 },
    { name: "เล่นสกี", met: 7.0 },
    { name: "ไต่เขา", met: 6.0 },
    { name: "ยกน้ำหนัก", met: 6.0 },
    { name: "ทำงานบ้าน", met: 3.0 },
    { name: "ล้างจาน", met: 2.5 },
    { name: "ซักผ้า", met: 2.0 },
    { name: "ทำสวน", met: 4.0 },
    { name: "เก็บใบไม้", met: 4.0 },
    { name: "ถูพื้น", met: 3.5 },
    { name: "เดินขึ้นบันได", met: 8.8 },
    { name: "นั่งทำงาน", met: 1.5 },
    { name: "ยืนทำงาน", met: 2.0 },
    { name: "ขับรถ", met: 2.0 },
    { name: "อ่านหนังสือ", met: 1.3 },
    { name: "ดูทีวี", met: 1.3 },
    { name: "นอนหลับ", met: 0.9 },
  ];

  const calculateCalories = () => {
    if (!weight || !activity || !duration) return;

    const selectedActivity = activities.find(act => act.name === activity);
    if (!selectedActivity) return;

    // สูตร: แคลอรี่ = MET × น้ำหนัก (กก.) × เวลา (ชั่วโมง)
    const calories = selectedActivity.met * parseFloat(weight) * (parseFloat(duration) / 60);
    setResult(Math.round(calories));
  };

  const resetForm = () => {
    setWeight("");
    setActivity("");
    setDuration("");
    setResult(null);
  };

  const getActivityCategory = (met: number) => {
    if (met < 3) return { category: "กิจกรรมเบา", color: "bg-blue-100 text-blue-800" };
    if (met < 6) return { category: "กิจกรรมปานกลาง", color: "bg-green-100 text-green-800" };
    return { category: "กิจกรรมหนัก", color: "bg-red-100 text-red-800" };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          เครื่องคำนวณแคลอรี่จากกิจกรรม
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          คำนวณจำนวนแคลอรี่ที่เผาผลาญจากกิจกรรมและการออกกำลังกายต่างๆ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-primary" />
              <span>เลือกกิจกรรมและระยะเวลา</span>
            </CardTitle>
            <CardDescription>
              กรอกข้อมูลเพื่อคำนวณแคลอรี่ที่เผาผลาญจากกิจกรรมของคุณ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="weight">น้ำหนักตัว (กิโลกรัม)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="65"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>เลือกกิจกรรม</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกกิจกรรมที่ทำ" />
                </SelectTrigger>
                <SelectContent>
                  {activities.map((act) => (
                    <SelectItem key={act.name} value={act.name}>
                      <div className="flex items-center justify-between w-full">
                        <span>{act.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          MET: {act.met}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">ระยะเวลา (นาที)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="30"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="flex gap-4">
              <Button onClick={calculateCalories} className="flex-1">
                <Flame className="h-4 w-4 mr-2" />
                คำนวณแคลอรี่
              </Button>
              <Button variant="outline" onClick={resetForm}>
                ล้างข้อมูล
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Flame className="h-6 w-6 text-primary" />
              <span>ผลการคำนวณ</span>
            </CardTitle>
            <CardDescription>
              จำนวนแคลอรี่ที่เผาผลาญจากกิจกรรมที่เลือก
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result !== null ? (
              <div className="space-y-6">
                {/* Main Result */}
                <div className="bg-gradient-health rounded-lg p-8 text-center text-white">
                  <div className="space-y-2">
                    <Flame className="h-12 w-12 mx-auto opacity-80" />
                    <div className="text-4xl font-bold">{result}</div>
                    <div className="text-lg opacity-90">แคลอรี่ที่เผาผลาญ</div>
                  </div>
                </div>

                {/* Activity Details */}
                {activity && (
                  <div className="bg-gradient-hero rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-foreground">รายละเอียดกิจกรรม</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">กิจกรรม:</span>
                        <span className="font-medium">{activity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">ระยะเวลา:</span>
                        <span className="font-medium">{duration} นาที</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">น้ำหนัก:</span>
                        <span className="font-medium">{weight} กก.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">ความหนัก:</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          getActivityCategory(activities.find(act => act.name === activity)?.met || 0).color
                        }`}>
                          {getActivityCategory(activities.find(act => act.name === activity)?.met || 0).category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Equivalent Foods */}
                <div className="border-t pt-4 space-y-3">
                  <h4 className="font-semibold text-foreground">เทียบเท่ากับอาหาร</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ข้าวสวย:</span>
                      <span className="font-medium">~{Math.round(result / 130)} ทัพพี</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">กล้วย:</span>
                      <span className="font-medium">~{Math.round(result / 89)} ผล</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ขนมปัง:</span>
                      <span className="font-medium">~{Math.round(result / 80)} แผ่น</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">นม:</span>
                      <span className="font-medium">~{Math.round(result / 150)} แก้ว</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>เลือกกิจกรรมและกรอกข้อมูลเพื่อคำนวณแคลอรี่</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Activity Categories */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-foreground">
          หมวดหมู่กิจกรรม
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Light Activities */}
          <Card className="shadow-card border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                กิจกรรมเบา
              </CardTitle>
              <CardDescription>MET 1.0-2.9 | ประมาณ 100-200 แคลอรี่/ชม.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                {activities.filter(act => act.met < 3).slice(0, 6).map(act => (
                  <div key={act.name} className="flex justify-between">
                    <span>{act.name}</span>
                    <span className="text-blue-600 font-medium">{act.met}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Moderate Activities */}
          <Card className="shadow-card border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                กิจกรรมปานกลาง
              </CardTitle>
              <CardDescription>MET 3.0-5.9 | ประมาณ 200-400 แคลอรี่/ชม.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                {activities.filter(act => act.met >= 3 && act.met < 6).slice(0, 6).map(act => (
                  <div key={act.name} className="flex justify-between">
                    <span>{act.name}</span>
                    <span className="text-green-600 font-medium">{act.met}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vigorous Activities */}
          <Card className="shadow-card border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center">
                <Timer className="h-5 w-5 mr-2" />
                กิจกรรมหนัก
              </CardTitle>
              <CardDescription>MET 6.0+ | มากกว่า 400 แคลอรี่/ชม.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                {activities.filter(act => act.met >= 6).slice(0, 6).map(act => (
                  <div key={act.name} className="flex justify-between">
                    <span>{act.name}</span>
                    <span className="text-red-600 font-medium">{act.met}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-muted rounded-2xl p-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            เทคนิคการเผาผลาญแคลอรี่
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">เพิ่มความหนัก</h3>
            <p className="text-muted-foreground text-sm">เลือกกิจกรรมที่มี MET สูงกว่า 6 เพื่อเผาผลาญแคลอรี่มากขึ้น</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">เพิ่มระยะเวลา</h3>
            <p className="text-muted-foreground text-sm">ออกกำลังกายนานขึ้นจะช่วยเผาผลาญแคลอรี่เพิ่มมากขึ้น</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
              <Flame className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">สม่ำเสมอ</h3>
            <p className="text-muted-foreground text-sm">ออกกำลังกายสม่ำเสมอจะช่วยเพิ่มอัตราการเผาผลาญพลังงาน</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">หลากหลาย</h3>
            <p className="text-muted-foreground text-sm">ผสมผสานกิจกรรมหลายประเภทเพื่อความสนุกและประสิทธิภาพ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCalories;