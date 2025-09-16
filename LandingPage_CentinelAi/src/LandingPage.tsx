import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Camera, Users, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">Centinelai</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sistema Inteligente de
              <span className="text-indigo-600 block">Control de Accesos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Gestiona cámaras, molinetes y controla el acceso de usuarios con ayuda de nuestra plataforma 
              de seguridad inteligente. Monitoreo en tiempo real y control total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600">
              Todo lo que necesitas para gestionar tu sistema de seguridad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-shadow">
              <Camera className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control de Cámaras</h3>
              <p className="text-gray-600">Gestiona y monitorea todas tus cámaras desde un solo lugar</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Molinetes Inteligentes</h3>
              <p className="text-gray-600">Control de acceso automatizado con tecnología avanzada</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gestión de Usuarios</h3>
              <p className="text-gray-600">Administra permisos y accesos de forma centralizada</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition-shadow">
              <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Historial Completo</h3>
              <p className="text-gray-600">Registro detallado de todas las actividades del sistema</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regístrate</h3>
              <p className="text-gray-600">Crea una cuenta en minutos y configura tu organización.</p>
            </div>
            <div className="p-6">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conecta tus dispositivos</h3>
              <p className="text-gray-600">Integra cámaras, molinetes y usuarios de forma centralizada.</p>
            </div>
            <div className="p-6">
              <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitorea y controla</h3>
              <p className="text-gray-600">Accede al panel en tiempo real y administra todo desde un solo lugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir Centinelai?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Interfaz Intuitiva</h3>
                    <p className="text-gray-600">Diseño simple y fácil de usar para todos los usuarios</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Monitoreo en Tiempo Real</h3>
                    <p className="text-gray-600">Visualiza el estado de todos tus dispositivos al instante</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Seguridad Avanzada</h3>
                    <p className="text-gray-600">Protección de datos y acceso controlado por roles</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Escalable</h3>
                    <p className="text-gray-600">Crece con tu negocio, desde pequeñas oficinas hasta grandes empresas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Comienza hoy mismo</h3>
              <p className="text-indigo-100 mb-6">
                Únete a cientos de empresas que ya confían en Centinelai para su seguridad
              </p>
              <Link
                to="/register"
                className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Registrarse Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publicidad */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Tu seguridad comienza hoy</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Empieza a controlar accesos y monitorear tus dispositivos con la 
            potencia de Centinelai. Rápido, seguro y escalable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Crear Cuenta Gratis
            </Link>
            <Link
              to="/login"
              className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-indigo-400 mr-3" />
              <span className="text-2xl font-bold">Centinelai</span>
            </div>
            <div className="text-gray-400">
              © 2025 Centinelai.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};