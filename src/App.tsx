import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { LockIcon, MailIcon, UserIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      toast({
        title: "登录成功",
        description: "欢迎回来！",
      })
    } else {
      toast({
        variant: "destructive",
        title: "登录失败",
        description: "邮箱或密码不正确，请重试。",
      })
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <Card className="w-full max-w-md animate-fadeIn">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">欢迎回来</CardTitle>
          <CardDescription className="text-center">请输入您的登录信息</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    placeholder="your@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">密码</Label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 transition-all duration-300 hover:bg-blue-600" type="submit" disabled={isLoading}>
              {isLoading ? "登录中..." : "登录"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="outline" className="w-full transition-all duration-300 hover:bg-gray-100">
            <UserIcon className="mr-2 h-4 w-4" /> 创建账户
          </Button>
          <Button variant="link" className="text-sm transition-all duration-300 hover:text-blue-600">
            忘记密码？
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}

export default App;