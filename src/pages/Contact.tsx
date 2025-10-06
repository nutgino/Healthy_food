import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "ชื่อ, อีเมล และข้อความเป็นข้อมูลที่จำเป็น",
        variant: "destructive",
      });
      return;
    }

    // จำลองการส่งข้อมูล
    toast({
      title: "ส่งข้อความสำเร็จ!",
      description: "เราจะติดต่อกลับภายใน 24 ชั่วโมง",
    });

    // รีเซ็ตฟอร์ม
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          ติดต่อเรา
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          มีคำถามเกี่ยวกับโภชนาการ หรือต้องการคำแนะนำ? ติดต่อเราได้ทุกช่องทาง
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <span>ข้อมูลติดต่อ</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">อีเมล</p>
                  <p className="text-muted-foreground">info@nutrilife.com</p>
                  <p className="text-muted-foreground">support@nutrilife.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">โทรศัพท์</p>
                  <p className="text-muted-foreground">+66 (0) 2-xxx-xxxx</p>
                  <p className="text-muted-foreground">+66 (0) 8x-xxx-xxxx</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">ที่อยู่</p>
                  <p className="text-muted-foreground">123/45 ถนนสุขภาพ</p>
                  <p className="text-muted-foreground">เขตสาธารณสุข กรุงเทพฯ 10110</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">เวลาทำการ</p>
                  <p className="text-muted-foreground">จันทร์ - ศุกร์: 09:00 - 18:00</p>
                  <p className="text-muted-foreground">เสาร์ - อาทิตย์: 10:00 - 16:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>ติดตามเราได้ที่</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Facebook</p>
                    <p className="text-sm text-muted-foreground">@NutriLifeThailand</p>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-muted-foreground">@nutrilife_th</p>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="font-medium">Twitter</p>
                    <p className="text-sm text-muted-foreground">@NutriLifeTH</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-6 w-6 text-primary" />
                <span>ส่งข้อความถึงเรา</span>
              </CardTitle>
              <CardDescription>
                กรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับภายใน 24 ชั่วโมง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="กรอกชื่อของคุณ"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">หัวข้อ</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="หัวข้อที่ต้องการสอบถาม"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">ข้อความ *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="รายละเอียดที่ต้องการสอบถาม..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto px-8">
                  <Send className="h-4 w-4 mr-2" />
                  ส่งข้อความ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-muted-foreground">
            คำตอบสำหรับคำถามที่ผู้ใช้งานมักจะสอบถาม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">เครื่องคำนวณแม่นยำแค่ไหน?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                เครื่องคำนวณของเราใช้สูตรที่ได้รับการยอมรับจากองค์กรสุขภาพนานาชาติ 
                เช่น สูตร Harris-Benedict สำหรับ BMR และระบบ MET สำหรับแคลอรี่จากกิจกรรม
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">ข้อมูลส่วนตัวปลอดภัยหรือไม่?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                เราไม่เก็บข้อมูลส่วนตัวใดๆ บนเซิร์ฟเวอร์ การคำนวณทั้งหมดทำงานบนเบราว์เซอร์ของคุณ 
                และข้อมูลจะถูกลบเมื่อปิดหน้าเว็บ
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">สามารถใช้เป็นคำแนะนำทางการแพทย์ได้หรือไม่?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                ข้อมูลในเว็บไซต์มีไว้เพื่อการศึกษาและอ้างอิงเท่านั้น 
                ไม่ควรใช้แทนคำแนะนำจากแพทย์หรือนักโภชนาการ โปรดปรึกษาผู้เชี่ยวชาญ
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">มีการอัปเดตข้อมูลบ่อยแค่ไหน?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                เราอัปเดตข้อมูลโภชนาการและบทความสุขภาพสม่ำเสมอ 
                ตามงานวิจัยและคำแนะนำใหม่ๆ จากหน่วยงานสุขภาพ
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-center">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">
            พร้อมเริ่มต้นชีวิตสุขภาพดีแล้วหรือยัง?
          </h2>
          <p className="text-muted-foreground">
            เริ่มต้นด้วยการคำนวณ BMI และ BMR ของคุณวันนี้
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="/bmi-bmr">
              เริ่มคำนวณเลย
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;