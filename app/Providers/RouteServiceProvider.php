<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
        //360
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/qltzz.php'));
        //搜狗
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/hxtz126.php'));
        //神马
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/ShenMa.php'));
        //ww.xxheyan.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/cmsyuns.php'));
        //ww.chuangdc.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/chuangdc.php'));
        //ww.goynch.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/goynch.php'));
        //ww.sxzctec039.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/sxzctec039.php'));
        //ww.padays.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/padays.php'));
        //ww.hctz188.cn
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/hctz188.php'));
        //www.zhangzhenzen.xin
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/zhangzhenzen.php'));

    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespace)
             ->group(base_path('routes/api.php'));
    }


}
